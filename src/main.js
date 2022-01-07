import Navigo from "navigo";

const router = new Navigo("/", { linksSelector: "a" });
router.on({
    // Nếu user truy cập vào đường dẫn / thì sẽ làm việc gì đó
    "/": () => console.log("home page"),
    "/about": () => console.log("About page"),
    "/product": () => console.log("Product Page"),
});
router.notFound(() => console.log("not found page"));

router.resolve();