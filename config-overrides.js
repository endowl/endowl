import {override, addWebpackModuleRule} from "customize-cra";
import "raw-loader";

export default override(
    addWebpackModuleRule({
        test: /\.md$/,
        use: "raw-loader",
    })
)