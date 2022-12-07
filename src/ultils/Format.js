export function formatTien(n, currency) {
    return n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, "$1,") + currency;
}

export function caculate(data) {
    return (data.thayDoiGiasLSP[0].giamoi - data.thayDoiGiasLSP[0].giamoi * data.ctGiamGiaLSP[0].phantram / 100)
}