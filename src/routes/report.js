module.exports = [
    {
        route: 'report-sales-payment',
        name: 'report-sales-payment',
        moduleId: './modules/report-sales-payment/index',
        nav: true,
        title: 'Laporan Penjualan - Omset',
        auth: true,
        settings: {
            group: "report",
            permission: { "C.01":1,"GP.01":1,"SA.01":1,"ON.01":1,"PU.01":1,"VIP.01":1,"CN.01":1 },
        }
    },
    {
        route: 'report-payment-method',
        name: 'report-payment-method',
        moduleId: './modules/report-payment-method/index',
        nav: true,
        title: 'Laporan Penjualan - Metode Payment',
        auth: true,
        settings: {
            group: "report",
            permission: { "C.01":1,"GP.01":1,"SA.01":1,"ON.01":1,"PU.01":1,"VIP.01":1,"CN.01":1 },
        }
    },
    {
        route: 'report-sales-return',
        name: 'report-sales-return',
        moduleId: './modules/report-sales-return/index',
        nav: true,
        title: 'Laporan Retur Penjualan',
        auth: true,
        settings: {
            group: "report",
            permission: { "C.01":1,"GP.01":1,"SA.01":1,"ON.01":1,"PU.01":1,"VIP.01":1,"CN.01":1 },
        }
    },
    {
        route: 'report-void-sales',
        name: 'report-void-sales',
        moduleId: './modules/report-void-sales/index',
        nav: true,
        title: 'Laporan Void Penjualan',
        auth: true,
        settings: {
            group: "report",
            permission: { "C.01":1,"GP.01":1,"SA.01":1,"ON.01":1,"PU.01":1,"VIP.01":1,"CN.01":1 },
        }
    }]
