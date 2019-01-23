/*
* @Author: LogIN-
* @Date:   2018-03-22 13:10:06
* @Last Modified by:   LogIN-
* @Last Modified time: 2018-04-12 08:40:46
*/
import request from "@/utils/request";
const baseUrlPath = "/plots";

export function fetchCorrPlotOptions() {
    return request({
        url: baseUrlPath + "/correlation/render-options",
        method: "GET"
    });
}

export function fetchCorrPlotImage(query) {
    return request({
        url: baseUrlPath + "/correlation/render-plot",
        method: "GET",
        params: query,
        responseType: "arraybuffer"
    });
}

export function fetchHeatmapImage(query) {
    return request({
        url: baseUrlPath + "/heatmap/render-plot",
        method: "GET",
        params: query,
        responseType: "arraybuffer"
    });
}

export function fetchGraphVariableImportance(query) {
    return request({
        url: baseUrlPath + "/variableImportance/render-plot",
        method: "GET",
        params: query,
        responseType: "arraybuffer"
    });
}

export function fetchDatasetStatisticsBoolean(query) {
    return request({
        url: baseUrlPath + "/stats/two-class",
        method: "GET",
        params: query
    });
}

export function fetchDatasetStatisticsOther(query) {
    return request({
        url: baseUrlPath + "/stats/multi-class",
        method: "GET",
        params: query
    });
}

export function fetchGraphSummary(query) {
    return request({
        url: baseUrlPath + "/summary/render-plot",
        method: "GET",
        params: query
    });
}




