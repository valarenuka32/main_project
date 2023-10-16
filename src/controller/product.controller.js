const { productService } = require("../services");

const createProduct = async (req, res) => {
    try {
        const reqBody = req.body;

        const productEx = await productService.createProduct(reqBody.name);
        if (productEx) {
            throw new Error(`place add other product this ${productEx.name} peoduct alerady crate`)
        }

        const product = await productService.createProduct(reqBody);
        res.status(200).json({
            success: true,
            message: "Product cerate successfully!",
            data: { product }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const productList = async (req, res) => {
    try {
        const getList = await productService.productList();
        res.status(200).json({
            success: true,
            message: "user list create successfully!",
            data: { getList }
        });
    } catch (error) {
        res.status(200).json({ success: false, message: error.message });
    }
};

const deleteRecode = async (req, res) => {
    try {
        const productId = req.params.productId;

        const productEx = await productService.getProductById(productId);
        if (!productEx) {
            throw new Error("product not found")
        };

        await productService.deleteRecode(productId);
        res.status(200).json({
            success: true,
            message: "product delete successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const updateRecode = async (req, res) => {
    try {
        const productId = req.params.productId;

        const productEx = await productService.getProductById(productId);
        if (!productEx) {
            throw new Error("product not found")
        };

        await productService.updateRecode(productId, req.body);
        res.status(200).json({
            success: false,
            message: "product update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports = {
    createProduct,
    productList,
    deleteRecode,
    updateRecode
};