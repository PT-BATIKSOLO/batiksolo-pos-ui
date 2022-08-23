module.exports = [
    {
        route: 'sales',
        name: 'sales',
        moduleId: './modules/sales-cr/index',
        nav: true,
        title: 'Penjualan',
        auth: true,
        settings: {
            group: "transaction",
            permission: { "C.01":1,"GP.01":1,"SA.01":1,"ON.01":1,"PU.01":1,"VIP.01":1,"CN.01":1 },
        }
    },
    {
        route: 'salesReturn',
        name: 'salesReturn',
        moduleId: './modules/sales-return-cr/index',
        nav: true,
        title: 'Retur Penjualan',
        auth: true,
        settings: {
            group: "transaction",
            permission: { "C.01":1,"GP.01":1,"SA.01":1,"ON.01":1,"PU.01":1,"VIP.01":1,"CN.01":1 },
        }
    },
    {
        route: 'void-sales',
        name: 'void-sales',
        moduleId: './modules/void-sales-cr/index',
        nav: true,
        title: 'Void Penjualan',
        auth: true,
        settings: {
            group: "transaction",
            permission: { "C.01":1,"GP.01":1,"SA.01":1,"ON.01":1,"PU.01":1,"VIP.01":1,"CN.01":1 },
        }
    }]
