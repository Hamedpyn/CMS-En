const XAxis = [
    { name: "Jan", Sale: 450_0, },
    { name: "Feb", Sale: 570_0, },
    { name: "Mar", Sale: 310_0, },
    { name: "Apr", Sale: 245_0, },
    { name: "May", Sale: 750_0, },
    { name: "June", Sale: 130_0, },
    { name: "July", Sale: 480_0, },
    { name: "Aug", Sale: 340_0, },
    { name: "Sep", Sale: 910_0, },
    { name: "Oct", Sale: 460_0, },
    { name: "Nov", Sale: 630_0, },
    { name: "Dec", Sale: 960_0, },
]

const TransActions = [
    { avatar:"/public/profile.jfif",btnTitle: "Approved", id: 1, title: "Hamed Pooryousef", date: "Jun 12, 2023", amount: 129, type: "success", },
    { avatar:"/public/qadir.jpg",btnTitle: "Failure", id: 2, title: "Ali Daei", date: "Nov 29, 2023", amount: 156, type: "failure", },
    { avatar:"/public/sasan.jpg",btnTitle: "Pending", id: 3, title: "Lionel Messi", date: "Feb 19, 2023", amount: 142, type: "blue", },
    { avatar:"/public/hamze.jpg",btnTitle: "Approved", id: 4, title: "Javad Nekonam", date: "Mar 23, 2023", amount: 134, type: "success", },
]

const newUsers = [
    { id: 1, title: "Hamed Pooryousef", job: "Web Developer",avatar:"/public/profile.jfif" },
    { id: 2, title: "Ali Daei", job: "Football Player",avatar:"/public/qadir.jpg" },
    { id: 3, title: "Lionel Messi", job: "Football Player",avatar:"/public/sasan.jpg" },
    { id: 4, title: "Javad Nekonam", job: "Football Player",avatar:"/public/hamze.jpg" },
]

const UserList = [
    { id: 1, title: "Hamed Pooryousef", status: "active", amount: 129,avatar:"/public/profile.jfif" },
    { id: 2, title: "Ali Daei", status: "non-active", amount: 156,avatar:"/public/qadir.jpg" },
    { id: 3, title: "Lionel Messi", status: "active", amount: 142,avatar:"/public/sasan.jpg" },
    { id: 4, title: "Javad Nekonam", status: "non-active", amount: 134,avatar:"/public/hamze.jpg" },
]

const allProducts = [
    {id:1,title:"DELL",price:1199,img:"/public/dell.jpg"},
    {id:2,title:"ASUS",price:1399,img:"/public/asus.jpeg"},
    {id:3,title:"HP",price:1299,img:"/public/hp.jpg"},
    {id:4,title:"ACER",price:1599,img:"/public/acer.jpg"},
]

const monthSales = [
    {name:"Jan",sales:5000},
    {name:"Feb",sales:2000},
    {name:"Mar",sales:5000},
]

const productsDetails = [
    {stock:"no",action:"yes",id:1,title:"DELL",price:1199,img:"/public/dell.jpg"},
    {stock:"yes",action:"no",id:2,title:"ASUS",price:1399,img:"/public/asus.jpeg"},
    {stock:"no",action:"yes",id:3,title:"HP",price:1299,img:"/public/hp.jpg"},
    {stock:"yes",action:"no",id:4,title:"ACER",price:1599,img:"/public/acer.jpg"},
]

export { XAxis, TransActions, newUsers, UserList,allProducts,monthSales,productsDetails };