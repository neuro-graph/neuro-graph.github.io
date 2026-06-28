import {
  isLegacyThemeFamilyAsync,
  registerIcon
} from "./chunk-ETIVA6AE.js";
import "./chunk-G3PMV62Z.js";

// node_modules/@ui5/webcomponents-icons/dist/v4/org-chart.js
var name = "org-chart";
var pathData = "M1 12c0-.27.099-.505.297-.703A.961.961 0 0 1 2 11h1v-1c0-.354.094-.688.281-1A1.98 1.98 0 0 1 4 8.281 1.809 1.809 0 0 1 5 8h2.5V6H5a.973.973 0 0 1-.719-.281A.973.973 0 0 1 4 5V2c0-.27.094-.505.281-.703A.947.947 0 0 1 5 1h6c.292 0 .531.099.719.297A.988.988 0 0 1 12 2v3a.973.973 0 0 1-.281.719A.974.974 0 0 1 11 6H8.5v2H11c.396 0 .73.094 1 .281.292.167.531.406.719.719.187.313.281.646.281 1v1h1c.292 0 .531.099.719.297A.988.988 0 0 1 15 12v2a.974.974 0 0 1-.281.719A.974.974 0 0 1 14 15h-4a.988.988 0 0 1-.703-.281A.947.947 0 0 1 9 14v-2c0-.27.099-.505.297-.703A.961.961 0 0 1 10 11h2v-1a.973.973 0 0 0-.281-.719A.974.974 0 0 0 11 9H5a.973.973 0 0 0-.719.281A.973.973 0 0 0 4 10v1h2c.292 0 .531.099.719.297A.988.988 0 0 1 7 12v2a.974.974 0 0 1-.281.719A.973.973 0 0 1 6 15H2a.988.988 0 0 1-.703-.281A.947.947 0 0 1 1 14v-2Zm10-7V2H5v3h6Zm3 9v-2h-4v2h4ZM2 12v2h4v-2H2Z";
var ltr = false;
var accData = null;
var viewBox = "0 0 16 16";
var collection = "SAP-icons-v4";
var packageName = "@ui5/webcomponents-icons";
registerIcon(name, { pathData, ltr, viewBox, collection, packageName });

// node_modules/@ui5/webcomponents-icons/dist/v5/org-chart.js
var name2 = "org-chart";
var pathData2 = "M11.75 0a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-3v2.25h4a.75.75 0 0 1 .75.75v3h1.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 .75-.75H12V8.75H4V11h2.25a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1-.75-.75v-3.5A.75.75 0 0 1 .75 11H2.5V8a.75.75 0 0 1 .75-.75h4V5h-3a.75.75 0 0 1-.75-.75V.75A.75.75 0 0 1 4.25 0h7.5ZM1.5 14.5h4v-2h-4v2Zm9 0h4v-2h-4v2ZM5 3.5h6v-2H5v2Z";
var ltr2 = false;
var viewBox2 = "0 0 16 16";
var collection2 = "SAP-icons-v5";
var packageName2 = "@ui5/webcomponents-icons";
registerIcon(name2, { pathData: pathData2, ltr: ltr2, viewBox: viewBox2, collection: collection2, packageName: packageName2 });

// node_modules/@ui5/webcomponents-icons/dist/org-chart.js
var getPathData = async () => {
  return await isLegacyThemeFamilyAsync() ? pathData : pathData2;
};
var org_chart_default = "org-chart";
export {
  accData,
  org_chart_default as default,
  getPathData,
  ltr,
  viewBox
};
//# sourceMappingURL=@ui5_webcomponents-icons_dist_org-chart__js.js.map
