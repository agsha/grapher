var chartTemplate = {
    "chart": {
        "zoomType": "x"
    },
    "title": {
        "text": "Threads trying to increment a threadlocal volatile long"
    },
    "xAxis": {
        "categories": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 28, 56, 112, 224, 448, 896, 1792],
        "crosshair": true,
        "title": {
            "text": "number of threads"
        }
    },
    "yAxis": {
        "title": {
            "text": "total number of increments across all threads"
        },
        "format": "{value:,.0f}"
    },
    "tooltip": {
        "shared": true,
        //"pointFormat": "{point.y:,.0f}"
    },
    "legend": {
        "layout": "horizontal",
        "align": "left"
    },
    "series": [{
        "name": "",
        "type": "line",
        "data": [1.61171933E8, 3.16674718E8, 4.44960074E8, 5.75588887E8, 5.52668923E8, 8.10484109E8, 9.45506635E8, 9.36028952E8, 9.22567247E8, 1.343253387E9, 1.328399793E9, 1.330321453E9, 1.466072097E9, 1.595130711E9, 1.596522325E9, 1.586819114E9, 1.590791298E9, 1.58972823E9, 1.601374196E9, 1.599362769E9, 1.585025775E9]
    }]
};
