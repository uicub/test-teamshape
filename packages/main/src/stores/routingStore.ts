import { observable, action } from "mobx";
// import { Facebook } from "react-feather";
// import session from "./sessionStore";
import { menuItems, constants, titles } from "../constants/Products.constants";
// eslint-disable-next-line import/no-cycle
import session from "./sessionStore";

class Routing {
    @observable pageTitle = "";

    @observable route = "";

    @observable product = "";

    @observable previouseRoute = {
        route: "",
        title: "",
    };

    @observable back = false;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @action navigate = (url: string, title = "", back = false) => {
        if (session?.isAuthenticated) {
            console.log("navigate to ", url);
            this.previouseRoute.route = this.route;
            this.previouseRoute.title = this.pageTitle;
            this.route = url;
            if (title) {
                this.pageTitle = title;
            }
            this.back = back;
            window.location.href = url;
        } else {
            this.route = "login";
            window.location.href = "login";
        }
    };

    @action navigateNoAuth = (url: string) => {
        this.route = url;
        window.location.href = url;
    };

    goBack = () => {
        if (this.previouseRoute?.route) {
            this.navigate(this.previouseRoute.route, this.previouseRoute.title);
        } else {
            this.navigate(this.getProduct(), this.getTitle());
        }
    };

    getProduct = () => {
        const product = menuItems.find((item) =>
            this.route.includes(item.name)
        );
        if (this.route.includes(constants.user)) {
            return constants.yourTeam;
        }
        return product?.name || menuItems[0].name;
    };

    setProduct = (product: string) => {
        this.product = product;
        // this.navigate(`${this.product}`, titles[this.product]);
    };

    getTitle = () => {
        if (this.route.includes(constants.user)) {
            this.back = true;
            return titles[constants.user];
        }
        return ""; // titles[this.product];
    };
}

const routing = new Routing();
export default routing;
