import {
  isLegacyThemeFamilyAsync,
  registerIcon
} from "./chunk-ETIVA6AE.js";
import "./chunk-G3PMV62Z.js";

// node_modules/@ui5/webcomponents-icons/dist/v4/document-text.js
var name = "document-text";
var pathData = "M13 0c.292 0 .531.099.719.297A.988.988 0 0 1 14 1v14a.974.974 0 0 1-.281.719.935.935 0 0 1-.688.281h-10a1.03 1.03 0 0 1-.734-.281A.947.947 0 0 1 2 15V4l4-4h7Zm.031 15L13 1H7v3a.947.947 0 0 1-.297.719A.988.988 0 0 1 6 5H3v10h10.031ZM10.5 12c.333 0 .5.167.5.5 0 .125-.047.24-.14.344a.462.462 0 0 1-.36.156h-5a.478.478 0 0 1-.344-.156A.478.478 0 0 1 5 12.5c0-.146.052-.266.156-.36A.503.503 0 0 1 5.5 12h5Zm0-2c.333 0 .5.167.5.5 0 .125-.047.24-.14.344a.462.462 0 0 1-.36.156h-5a.478.478 0 0 1-.344-.156A.478.478 0 0 1 5 10.5c0-.146.052-.266.156-.36A.503.503 0 0 1 5.5 10h5Z";
var ltr = false;
var accData = null;
var viewBox = "0 0 16 16";
var collection = "SAP-icons-v4";
var packageName = "@ui5/webcomponents-icons";
registerIcon(name, { pathData, ltr, viewBox, collection, packageName });

// node_modules/@ui5/webcomponents-icons/dist/v5/document-text.js
var name2 = "document-text";
var pathData2 = "M12.25 0C13.216 0 14 .784 14 1.75v12.5A1.75 1.75 0 0 1 12.25 16h-8.5A1.75 1.75 0 0 1 2 14.25V6.37c0-.417.15-.821.42-1.139L6.38.611A1.751 1.751 0 0 1 7.71 0h4.54ZM7.71 1.5a.25.25 0 0 0-.19.087L7 2.193V5.25a.75.75 0 0 1-.75.75H3.738c-.089.104-.238.37-.238.37v7.88c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H7.71Zm2.54 10a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5h4.5Zm0-3a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5h4.5Z";
var ltr2 = false;
var viewBox2 = "0 0 16 16";
var collection2 = "SAP-icons-v5";
var packageName2 = "@ui5/webcomponents-icons";
registerIcon(name2, { pathData: pathData2, ltr: ltr2, viewBox: viewBox2, collection: collection2, packageName: packageName2 });

// node_modules/@ui5/webcomponents-icons/dist/document-text.js
var getPathData = async () => {
  return await isLegacyThemeFamilyAsync() ? pathData : pathData2;
};
var document_text_default = "document-text";
export {
  accData,
  document_text_default as default,
  getPathData,
  ltr,
  viewBox
};
//# sourceMappingURL=@ui5_webcomponents-icons_dist_document-text__js.js.map
