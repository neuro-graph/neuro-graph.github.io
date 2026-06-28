import {
  isLegacyThemeFamilyAsync,
  registerIcon
} from "./chunk-ETIVA6AE.js";
import "./chunk-G3PMV62Z.js";

// node_modules/@ui5/webcomponents-icons/dist/v4/workflow-tasks.js
var name = "workflow-tasks";
var pathData = "M1 15.016v-13c0-.27.094-.505.281-.703A.946.946 0 0 1 2 1.016h2v-1h.999v1h5.998v-1h1v1h2c.29 0 .53.099.718.297a.988.988 0 0 1 .281.703v13a.973.973 0 0 1-.281.719.973.973 0 0 1-.719.281H2a.973.973 0 0 1-.719-.281.973.973 0 0 1-.281-.719Zm1 0h11.996v-11H2v11Zm1.968-5.5c0-.333.167-.5.5-.5h5.967L8.092 6.891c-.23-.25-.23-.49 0-.719a.478.478 0 0 1 .343-.156c.125 0 .24.052.344.156l2.874 2.594c.188.208.281.448.281.719 0 .27-.093.51-.28.719L8.778 12.89a.477.477 0 0 1-.344.156c-.062 0-.177-.052-.343-.156-.23-.25-.23-.49 0-.719l2.343-2.156H4.468c-.333 0-.5-.167-.5-.5Zm7.03-7.5v1h.999v-1h-1Zm-6.999 0v1h1v-1h-1Z";
var ltr = false;
var accData = null;
var viewBox = "0 0 16 17";
var collection = "SAP-icons-v4";
var packageName = "@ui5/webcomponents-icons";
registerIcon(name, { pathData, ltr, viewBox, collection, packageName });

// node_modules/@ui5/webcomponents-icons/dist/v5/workflow-tasks.js
var name2 = "workflow-tasks";
var pathData2 = "M11.256 0a.75.75 0 0 1 .75.75V2h.25a2.75 2.75 0 0 1 2.752 2.75v.5a.75.75 0 0 1-1.5 0v-.5c0-.69-.56-1.25-1.251-1.25h-.25v.75a.75.75 0 0 1-1.501 0V3.5H5.503v.75a.75.75 0 0 1-1.501 0V3.5h-.25A1.25 1.25 0 0 0 2.5 4.75v8.5c0 .69.56 1.25 1.25 1.25h8.506c.69 0 1.25-.56 1.25-1.25v-.5a.75.75 0 0 1 1.501 0v.5a2.75 2.75 0 0 1-2.75 2.75H3.752A2.75 2.75 0 0 1 1 13.25v-8.5A2.75 2.75 0 0 1 3.752 2h.25V.75a.75.75 0 0 1 1.5 0V2h5.004V.75a.75.75 0 0 1 .75-.75Zm1.47 6.47a.751.751 0 0 1 1.062 0l2 1.997a.772.772 0 0 1 0 1.06l-2 2.003a.751.751 0 0 1-1.061-1.06l.719-.72h-2.687a.75.75 0 1 1 0-1.5h2.689l-.721-.72a.75.75 0 0 1 0-1.06ZM5.003 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm3.002 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z";
var ltr2 = false;
var viewBox2 = "0 0 16 16";
var collection2 = "SAP-icons-v5";
var packageName2 = "@ui5/webcomponents-icons";
registerIcon(name2, { pathData: pathData2, ltr: ltr2, viewBox: viewBox2, collection: collection2, packageName: packageName2 });

// node_modules/@ui5/webcomponents-icons/dist/workflow-tasks.js
var getPathData = async () => {
  return await isLegacyThemeFamilyAsync() ? pathData : pathData2;
};
var workflow_tasks_default = "workflow-tasks";
export {
  accData,
  workflow_tasks_default as default,
  getPathData,
  ltr,
  viewBox
};
//# sourceMappingURL=@ui5_webcomponents-icons_dist_workflow-tasks__js.js.map
