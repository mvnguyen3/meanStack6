let express = require('express'),
router = express.Router({caseSensitive:true}),
userDataModel = require("./DataModel/UserDataModel"),
signInModel = require("./DataModel/SignInUserModel"),
cartModel = require("./DataModel/CartModel");
productModel = require("./DataModel/ProductModel");


router.post('/api/addProducts',(req, res) =>{ //RESTFul ness of API : CRUD: Create(Post) Read(Get) Update(Post/Put/Patch) Delete(Delete)
  //console.log("Body ", req.body);
  let products = new productModel({
    productName: req.body.productName,
    pDescription: req.body.pDescription,
    pPrice: req.body.pPrice,
    pRating : req.body.pRating
  });

  productModel.findOne({productName: req.body.productName}, (err, productName) => {
        if (err){
            //console.log("got an error!");            
            res.send(err);
        }
        if (!productName) {
          //console.log("No Student Present, Adding!"); 
          products.save((err, data, next)=>{        
            if (err) {
                res.send("Error Occurred"+ err);
            }      
            res.json(data);
          });
        }else{
          res.json(productName);
        }
  });  
});





router.post('/api/signInUpUser',(req, res) =>{ //RESTFul ness of API : CRUD: Create(Post) Read(Get) Update(Post/Put/Patch) Delete(Delete)
    //console.log("Body ", req.body);
    let signObjForMongo = new signInModel({
      firstName: req.body.firstName,
      password: req.body.password,
      street: req.body.street,
      cellPhone : req.body.cellPhone
    });
  
    signInModel.findOne({firstName: req.body.firstName}, (err, signinuser) => {
          if (err){
              //console.log("got an error!");            
              res.send(err);
          }
          if (!signinuser) {
            //console.log("No Student Present, Adding!"); 
            signObjForMongo.save((err, data, next)=>{        
              if (err) {
                  res.send("Error Occurred"+ err);
              }      
              res.json(data);
            });
          }else{
            res.json(signinuser);
          }
    });  
});

//cart item update api's
router.post('/api/saveUserCart',(req, res) =>{
  console.log("Body ", req.body);
  let cartObj = new cartModel({
    userid: req.body.userid,
    cart: req.body.items
  });
  cartModel.findOne({userid: req.body.userid},(err, cartitems) => {
        console.log("We Found One - ",cartitems);
        if (err){
            console.log("got an error!");            
            res.send(err);
        }
        if (!cartitems) {
          console.log("No cartitems Present, Adding!"); 
          cartObj.save((err, data, next)=>{        
            if (err) {
                res.send("Error Occurred"+ err);
            }      
            res.json(data);
          });
        }else{
          console.log("No Student Present, Replacing!");
          cartitems.cart = req.body.items
          cartitems.save((err, data, next)=>{        
            if (err) {
                res.send("Error Occurred"+ err);
            }      
            res.json(data);
          });
        }
  });
})



router.post('/api/getUserCart',(req, res) =>{
  console.log("Body ", req.body);
  // let cartObj = new cartModel({
  //   userid: req.body.userid
  // });
  cartModel.findOne({userid: req.body.userid},(err, cart) => {         
    if (err) {
        res.send("Error Occurred"+ err);
    }      
    res.json(cart);
  });  
})

// let description = "1 GHz Qualcomm QSD 8250 Scorpion (Snapdragon) 3.8\" 480 x 800";
// let name = "Windows Phone 1";
// let price = 329;
// let rate = 5;
// Get Product Experimental
router.get('/api/products', (req, res) =>{
  productModel.find((err, products)=>{
    if (err){
      console.log("error")
    }
    // products will contains the whole collection of productModel db
    products.map(product => (
        console.log(product)
      ))
    res.json(products);
});
  });
  

  // var products = [
  //   {
  //         "description": productObject.description,
  //         "name": productObject.name,
  //         "price": productObject.price,
  //         "rate": productObject.rate,
  //   },
  // ]
   // res.json(productObject);
    //setTimeout(()=> {res.json(products);}, 1000);


//cart item update api's end
/*
router.get('/api/products',(req, res) =>{
    var products = [
        {
          "brandId": "12",
          "camera": "5 MP AF with flash, 720p HD video recording",
          "cpu": "1 GHz Qualcomm QSD 8250 Scorpion (Snapdragon)",
          "display": "3.8\" 480 x 800",
          "gpu": null,
          "id": 2,
          "name": "Windows Phone 1",
          "os": "Windows Phone 7",
          "ram": "448 MB",
          "size": "95.4 cm3 119.7 x 61.5 x 13 mm",
          "storage": "16.5 GB",
          "weight": "165 g",
          "year": 2011,
          "price": 329,
          "released": "2010-09-26T18:30:00.000Z"
        },
        {
          "brandId": 1,
          "camera": "5 MP with AF and geotagging",
          "cpu": "600 MHz Qualcomm MSM7227",
          "display": "3.2\" 320 x 480",
          "gpu": null,
          "id": 4,
          "name": "HTC Aria",
          "os": "Android 2.1, upgradable to 2.2",
          "ram": "384 MB",
          "size": "70 cm3 103.8 x 57.7 x 11.7 mm",
          "storage": "512 MB",
          "weight": "115 g",
          "year": 2010,
          "price": 347,
          "released": "2010-12-12T18:30:00.000Z"
        },
        {
          "brandId": 1,
          "camera": "5 MP AF with LED flash, geotagging, 720p HD recording (2.2 update needed)",
          "cpu": "1 GHz Qualcomm QSD 8250 Snapdragon",
          "display": "3.7\" 480 x 800 AMOLED or SLCD",
          "gpu": "Adreno 200",
          "id": 5,
          "name": "HTC Desire",
          "os": "Android 2.1, upgradable to 2.3",
          "ram": "576 MB",
          "size": "85 cm3 119 x 60 x 11.9 mm",
          "storage": "512 MB",
          "weight": "135 g",
          "year": 2010,
          "price": 335,
          "released": "2010-09-26T18:30:00.000Z"
        },
        {
          "brandId": 1,
          "camera": "8 MP AF with dual LED flash, geotagging, 720p HD recording",
          "cpu": "1 GHz Qualcomm MSM 8255 Scorpion (Snapdragon)",
          "display": "4.3\" 480 x 800 SLCD",
          "gpu": "Adreno 205",
          "id": 6,
          "name": "HTC Desire 2002",
          "os": "Android 2.2",
          "ram": "768 MB",
          "size": "98.7 cm3 123 x 68 x 11.8 mm",
          "storage": "1.5 GB",
          "weight": "164 g",
          "year": 2010,
          "price": 385,
          "released": "2010-08-19T18:30:00.000Z"
        },
        {
          "brandId": 1,
          "camera": "5 MP AF with LED flash, geotagging, 720p HD recording",
          "cpu": "800 MHz Qualcomm MSM 7230",
          "display": "3.7\" 800 x 480 SLCD",
          "gpu": "Adreno 205",
          "id": 7,
          "name": "HTC Desire Z (aka T-mobile HTC G2)",
          "os": "Android 2.2 upgradable to 2.3.3",
          "ram": "512 MB",
          "size": "101.8 cm3 119 x 60.4 x 14.2 mm",
          "storage": "1.5 GB",
          "weight": "180 g",
          "year": 2010,
          "price": 374,
          "released": "2010-09-30T18:30:00.000Z"
        },
        {
          "brandId": 1,
          "camera": "5 MP with AF",
          "cpu": "600 MHz Qualcomm",
          "display": "3.2\" 320 x 480",
          "gpu": null,
          "id": 8,
          "name": "HTC HD Mini",
          "os": "Windows Mobile 6.5 Professional",
          "ram": "384 MB",
          "size": "70 cm3 103.8 x 57.7 x 11.7 mm",
          "storage": "512 MB",
          "weight": "110 g",
          "year": 2010,
          "price": 340,
          "released": "2010-05-08T18:30:00.000Z"
        },
        {
          "brandId": 1,
          "camera": "5 MP AF CMOS sensor with dual LED flash, 720p HD video recording",
          "cpu": "1 GHz Qualcomm QSD 8250 Scorpion (Snapdragon)",
          "display": "4.3\" 480 x 800",
          "gpu": "Adreno 200",
          "id": 9,
          "name": "HTC HD7",
          "os": "Windows Phone 7",
          "ram": "576 MB",
          "size": "85 cm3 122 x 68 x 11.2 mm",
          "storage": "8.5 or 16.5 GB (Europe or Asia respectively)",
          "weight": "162 g",
          "year": 2010,
          "price": 266,
          "released": "2010-04-17T18:30:00.000Z"
        },
        {
          "brandId": 1,
          "camera": "5 MP AF with flash, geotagging",
          "cpu": "600 MHz Qualcomm MSM7227",
          "display": "3.2\" 320 x 480 AMOLED",
          "gpu": null,
          "id": 10,
          "name": "HTC Legend",
          "os": "Android 2.1, upgradable to 2.2",
          "ram": "384 MB",
          "size": "72.5 cm3 112 x 56.3 x 11.5 mm",
          "storage": "512 MB",
          "weight": "126 g",
          "year": 2010,
          "price": 300,
          "released": "2010-07-20T18:30:00.000Z"
        },
        {
          "brandId": 2,
          "camera": "5.0 MP AF with LED flash, geotagging, 720 x 480 video at 20 frame/s or higher",
          "cpu": "1 GHz Qualcomm QSD 8250 Snapdragon",
          "display": "3.7\" 480 x 800",
          "gpu": "Adreno 200",
          "id": 11,
          "name": "Google Nexus One",
          "os": "Android 2.1, upgradable to 2.3.4",
          "ram": "512 MB",
          "size": "81.8 cm3 119 x 59.8 x 11.5 mm",
          "storage": "512 MB",
          "weight": "130 g",
          "year": 2010,
          "price": 328,
          "released": "2010-01-06T18:30:00.000Z"
        },
        {
          "brandId": 1,
          "camera": "3 MP with flashlight",
          "cpu": "300 MHz",
          "display": "2.8\" 240 x 320",
          "gpu": null,
          "id": 12,
          "name": "HTC Smart",
          "os": "Brew Mobile Platform",
          "ram": "256 MB",
          "size": "73.2 cm3 104 x 55 x 12.8 mm",
          "storage": "256 MB",
          "weight": "108 g",
          "year": 2010,
          "price": 314,
          "released": "2011-01-04T18:30:00.000Z"
        },
        {
          "brandId": 1,
          "camera": "5 MP AF with LED flash, geotagging",
          "cpu": "528 MHz Qualcomm MSM7225",
          "display": "3.2\" 240 x 320",
          "gpu": null,
          "id": 13,
          "name": "HTC Wildfire",
          "os": "Android 2.1, upgradable to 2.2",
          "ram": "384 MB",
          "size": "78.6 cm3 106.8 x 60.4 x 12.2 mm",
          "storage": "512 MB",
          "weight": "118 g",
          "year": 2010,
          "price": 379,
          "released": "2010-11-14T18:30:00.000Z"
        },
        {
          "brandId": 3,
          "camera": "5 MP AF with LED flash and geotagging, 720p HD video recording",
          "cpu": "1 GHz Qualcomm QSD 8650 Scorpion (Snapdragon)",
          "display": "4.0\" 480 x 800",
          "gpu": "Adreno 200",
          "id": 14,
          "name": "LG Optimus 7",
          "os": "Windows Phone 7",
          "ram": "512 MB",
          "size": "85.9 cm3 125 x 59.8 x 11.5 mm",
          "storage": "16.5 GB",
          "weight": "157 g",
          "year": 2010,
          "price": 220,
          "released": "2011-01-01T18:30:00.000Z"
        },
        {
          "brandId": 3,
          "camera": "3.0 MP AF",
          "cpu": "600 MHz",
          "display": "3.2\" 320 x 480",
          "gpu": null,
          "id": 15,
          "name": "LG Optimus One P500",
          "os": "Android 2.2, upgradable to 2.3",
          "ram": "512 MB",
          "size": "89.1 cm3 113.5 x 59 x 13.3 mm",
          "storage": "150 MB",
          "weight": "129 g",
          "year": 2010,
          "price": 223,
          "released": "2010-11-07T18:30:00.000Z"
        },
        {
          "brandId": 7,
          "camera": "5 MP AF, 720p HD video recording (rear); 1.3 MP (front)",
          "cpu": "1 GHz ARM Cortex-A8 Samsung Hummingbird",
          "display": "4.0\" 480 x 800 Super AMOLED",
          "gpu": "PowerVR SGX 540",
          "id": 16,
          "name": "Samsung Galaxy S",
          "os": "Android 2.1",
          "ram": "512 MB",
          "size": "77.8 cm3",
          "storage": "16 GB + 0-32 GB micro SD",
          "weight": "118 g",
          "year": 2010,
          "price": 207,
          "released": "2010-02-11T18:30:00.000Z"
        },
        {
          "brandId": 2,
          "camera": "5 MP 2560x1920 AF with LED flash, 720x480 video recording (rear); 0.3 MP 640x480(front)",
          "cpu": "1 GHz ARM Cortex-A8 Samsung Hummingbird S5PC110",
          "display": "4.0\" 480 x 800 Super AMOLED",
          "gpu": "PowerVR SGX 540",
          "id": 17,
          "name": "Google Nexus S",
          "os": "Android 2.3",
          "ram": "512 MB",
          "size": "84.3 cm3 123.9 x 63 x 10.8 mm",
          "storage": "16 GB",
          "weight": "129 g",
          "year": 2010,
          "price": 363,
          "released": "2010-04-07T18:30:00.000Z"
        },
        {
          "brandId": 5,
          "camera": "5 MP AF with LED flash and geotagging, 720p HD video recording",
          "cpu": "1 GHz Qualcomm QSD 8250 Scorpion (Snapdragon)",
          "display": "4.0\" 480 x 800 Super AMOLED",
          "gpu": "Adreno 200",
          "id": 18,
          "name": "Samsung Omnia 7",
          "os": "Windows Phone 7",
          "ram": "512 MB",
          "size": "86.4 cm3 122.4 x 64.2 x 11 mm",
          "storage": "1 GB",
          "weight": "138.2 g",
          "year": 2010,
          "price": 337,
          "released": "2010-04-20T18:30:00.000Z"
        },
        {
          "brandId": 8,
          "camera": "8 MP, 3264 x 2448 pixels, AF, LED flash",
          "cpu": "1 GHz Qualcomm QSD8250 Snapdragon",
          "display": "4.0\" 854 x 480",
          "gpu": "Adreno 200",
          "id": 19,
          "name": "Sony Ericsson Xperia X10",
          "os": "Android 2.1",
          "ram": "384 MB",
          "size": "97.5 cm3 119 x 63 x 13 mm",
          "storage": "1.0 GB + 0-32 GB micro SD",
          "weight": "135 g",
          "year": 2010,
          "price": 302,
          "released": "2010-10-16T18:30:00.000Z"
        },
        {
          "brandId": 12,
          "camera": "8.0 MP AF with LED flash, face detection, video stabilization, and geotagging, 1920 x 1080 video at 30 frame/s (rear); 0.3 MP VGA (front)",
          "cpu": "800 MHz dual-core Apple A5",
          "display": "3.5\" 640 x 960 Retina display, 326 ppi",
          "gpu": "PowerVR SGX543MP2",
          "id": 20,
          "name": "Apple iPhone",
          "os": "iOS 5, upgradeable to iOS 9.0",
          "ram": "512 MB",
          "size": "62.8 cm3 115.2 x 58.6 x 9.3mm",
          "storage": "8, 16, 32, or 64 GB",
          "weight": "140 g",
          "year": 2011,
          "price": 368,
          "released": "2011-11-14T18:30:00.000Z"
        },
        {
          "brandId": 1,
          "camera": "5 MP AF with flash, 720p HD video recording",
          "cpu": "1 GHz Qualcomm QSD 8650 Scorpion (Snapdragon)",
          "display": "3.6\" 480 x 800",
          "gpu": null,
          "id": 21,
          "name": "HTC 7 Pro",
          "os": "Windows Phone 7",
          "ram": "576 MB",
          "size": "107.4 cm3 117.5 x 59 x 15.5 mm",
          "storage": "8.5 GB",
          "weight": "185 g",
          "year": 2011,
          "price": 233,
          "released": "2011-09-15T18:30:00.000Z"
        },
        {
          "brandId": 1,
          "camera": "5 MP AF with LED flash, geotagging, 720p HD recording",
          "cpu": "1 GHz Qualcomm MSM8255 Snapdragon",
          "display": "3.7\" 480 x 800 SLCD",
          "gpu": "Adreno 205",
          "id": 22,
          "name": "HTC Desire S",
          "os": "Android 2.3, upgradable to 4.0.4",
          "ram": "768 MB",
          "size": "79.8 cm  115 x 59.8 x 11.6 mm",
          "storage": "1.1 GB",
          "weight": "130 g",
          "year": 2011,
          "price": 336,
          "released": "2011-10-05T18:30:00.000Z"
        },
        {
          "brandId": 1,
          "camera": "Dual 5 MP AF rear back-illuminated sensors with dual LED flash; 1.3 MP front",
          "cpu": "1.2 GHz dual-core Qualcomm MSM 8660 Snapdragon",
          "display": "4.3\" 540x960 qHD at 256 ppi, Autostereoscopic 3D-capable (glasses-free) SLCD",
          "gpu": "Adreno 220",
          "id": 23,
          "name": "HTC EVO 3D",
          "os": "Android 2.3 Gingerbread",
          "ram": "1 GB",
          "size": "100.6 cm3 127 x 66 x 12 mm",
          "storage": "4 GB eMMC",
          "weight": "170 g",
          "year": 2011,
          "price": 224,
          "released": "2011-10-24T18:30:00.000Z"
        },
        {
          "brandId": 1,
          "camera": "8 MP AF with dual LED flash, geotagging, 720p HD recording",
          "cpu": "1 GHz Qualcomm MSM 8255 Scorpion (Snapdragon)",
          "display": "4.0\" 480 x 800 SLCD",
          "gpu": "Adreno 205",
          "id": 24,
          "name": "HTC Incredible S",
          "os": "Android 2.2, upgradable to 2.3",
          "ram": "768 MB",
          "size": "98.7 cm3 120 x 64 x 11.7 mm",
          "storage": "1.1 GB",
          "weight": "135g",
          "year": 2011,
          "price": 257,
          "released": "2011-05-21T18:30:00.000Z"
        },
        {
          "brandId": 1,
          "camera": "8 MP AF rear with dual LED flash, geotagging, 1080p video @ 30frame/s; 0.3 MP VGA front",
          "cpu": "1.2 GHz dual-core Qualcomm MSM 8260 Snapdragon",
          "display": "4.3\" 540x960 qHD SLCD",
          "gpu": "Adreno 220",
          "id": 25,
          "name": "HTC Sensation",
          "os": "Android 2.3, upgradable to 4.0.3",
          "ram": "768 MB",
          "size": "93.2 cm3 126.1 x 65.4 x 11.3 mm",
          "storage": "1 GB",
          "weight": "148 g",
          "year": 2011,
          "price": 341,
          "released": "2012-01-04T18:30:00.000Z"
        },
        {
          "brandId": 1,
          "camera": "5 MP AF with LED flash, geotagging",
          "cpu": "600 MHz Qualcomm MSM7227",
          "display": "3.2\" 320 x 480",
          "gpu": "Adreno 200",
          "id": 26,
          "name": "HTC Wildfire S",
          "os": "Android 2.3.3, upgradable to 2.3.5",
          "ram": "512 MB",
          "size": "74.6 cm3 101.3 x 59.4 x 12.4 mm",
          "storage": "512 MB",
          "weight": "105 g",
          "year": 2011,
          "price": 384,
          "released": "2011-05-18T18:30:00.000Z"
        },
        {
          "brandId": 3,
          "camera": "8 MP, 3264x2448 pixels rear AF with LED flash, 1080p video @ 24frame/s, 720p @ 30 frame/s; 1.3 MP front",
          "cpu": "1 GHz Nvidia Tegra 2 dual-core ARM Cortex-A9",
          "display": "4.0\" 480 x 800",
          "gpu": "GeForce ULP",
          "id": 27,
          "name": "LG Optimus 2X",
          "os": "Android 2.2, upgradable to 2.3",
          "ram": "512 MB",
          "size": "85.3 cm3 123.9 x 63.2 x 10.9mm",
          "storage": "8 GB",
          "weight": "139 g",
          "year": 2011,
          "price": 206,
          "released": "2011-11-10T18:30:00.000Z"
        },
        {
          "brandId": 7,
          "camera": "8.0 MP AF with LED flash, 1080p video at 30 frame/s",
          "cpu": "1 GHz Texas Instruments OMAP4430 dual-core ARM Cortex-A9 SoC",
          "display": "4.3\" 540x960 qHD LCD",
          "gpu": "PowerVR SGX 540",
          "id": 28,
          "name": "Motorola Droid Bionic",
          "os": "Android 2.3.4",
          "ram": "1 GB",
          "size": "93 cm3 127.5 x 66.9 x 10.9mm",
          "storage": "16 GB",
          "weight": "158 g",
          "year": 2011,
          "price": 305,
          "released": "2011-12-24T18:30:00.000Z"
        },
        {
          "brandId": 7,
          "camera": "5.0 MP AF rear with LED flash, 720p video at 30 frame/s; 0.3 MP VGA front",
          "cpu": "1 GHz Nvidia Tegra 2 dual-core ARM Cortex-A9",
          "display": "4.0\" 540x960 qHD LCD",
          "gpu": "GeForce ULP",
          "id": 29,
          "name": "Motorola Atrix 4G",
          "os": "Android 2.2, upgradable to 2.3",
          "ram": "1 GB",
          "size": "81.9 cm3 117.75 x 63.5 x 10.95mm",
          "storage": "16 GB",
          "weight": "135 g",
          "year": 2011,
          "price": 355,
          "released": "2011-12-11T18:30:00.000Z"
        },
        {
          "brandId": 7,
          "camera": "8.0 MP AF with flash, 720p HD video recording / 1.3MP front-facing camera",
          "cpu": "1.2 GHz TI OMAP4430",
          "display": "4.3\" 540 x 960",
          "gpu": "PowerVR SGX540",
          "id": 30,
          "name": "Motorola Droid RAZR",
          "os": "Android 2.3.5 Gingerbread",
          "ram": "1 GB",
          "size": "94 cm3 130.7 x 68.9 x 7.1 mm",
          "storage": "16 GB",
          "weight": "127 g",
          "year": 2011,
          "price": 336,
          "released": "2011-01-05T18:30:00.000Z"
        },
        {
          "brandId": 7,
          "camera": "5.0 MP AF, LED flash, zero shutter lag, 1080p video recording (1920x1080 @ 30 fps) (rear); 1.3 MP, 720p video (front)",
          "cpu": "1.2 GHz dual-core Texas Instruments OMAP4460 ARM Cortex-A9",
          "display": "4.65\" 720 x 1280 (Super AMOLED ~316 PPI)",
          "gpu": "PowerVR SGX540",
          "id": 31,
          "name": "Samsung Galaxy Nexus 3 - Galaxy X - Galaxy Nexus I9250",
          "os": "Android 4.0.1 (Ice Cream Sandwich), upgradeable to 4.2.2 or 4.3 (Jellybean)",
          "ram": "1 GB",
          "size": "81.9 cm3 135.5 x 67.9 x 8.9 mm",
          "storage": "16 GB",
          "weight": "135 g",
          "year": 2011,
          "price": 340,
          "released": "2011-11-23T18:30:00.000Z"
        },
        {
          "brandId": 7,
          "camera": "5.0 MP AF, LED flash, w480p@30fps video recording VGA video (front)",
          "cpu": "1.0 GHz Cortex-A8 (Hummingbird Chipset)",
          "display": "4.0\" 480 x 800 (Super AMOLED ~233 PPI)",
          "gpu": "PowerVR SGX540",
          "id": 32,
          "name": "Samsung Galaxy Nexus S 4G - Samsung SPH-D720",
          "os": "Android 2.3 (Gingerbread), upgradeable to Android 4.1.2 (Jellybean)",
          "ram": "512 MB",
          "size": "85.0 cm3 123.9 x 63 x 10.9 mm",
          "storage": "16 GB",
          "weight": "131 g",
          "year": 2011,
          "price": 308,
          "released": "2011-07-22T18:30:00.000Z"
        },
        {
          "brandId": 7,
          "camera": "8.0 MP AF, LED flash, 1080p video recording (1920x1080 @ 30 fps) (rear); 2 MP VGA video (front)",
          "cpu": "1.4 GHz dual-core ARM Cortex-A9 SoC processor; Samsung Exynos 4210 (GT-N7000) / 1.5Ghz Qualcomm Snapdragon 8255T (GT-N7003)",
          "display": "5.3\" 800 x 1280",
          "gpu": "ARM Mali-400 MP (GT-N7000)/Adreno 220(GT-N7003)",
          "id": 33,
          "name": "Samsung Galaxy Note",
          "os": "Android 2.3.6 (Gingerbread)",
          "ram": "1 GB",
          "size": "117.5 cm3 146.85 mm x 82.95 mm x 9.65 mm",
          "storage": "16 or 32 GB",
          "weight": "178 g",
          "year": 2011,
          "price": 253,
          "released": "2011-01-21T18:30:00.000Z"
        },
        {
          "brandId": 7,
          "camera": "8 MP 3264 x 2448 pixels, 1080p video @ 30frame/s (rear); 2 MP (front)",
          "cpu": "1.2 or 1.5 GHz dual-core ARM Cortex-A9 Samsung Exynos",
          "display": "4.27\" 480 x 800 Super AMOLED Plus",
          "gpu": "ARM Mali-400MP or GeForce ULP",
          "id": 34,
          "name": "Samsung Galaxy S II",
          "os": "Android 2.3 (upgradable to JellyBean 4.1.2)",
          "ram": "1 GB",
          "size": "70.3 cm3 125.3 x 66.1 x 8.49 mm",
          "storage": "16 or 32 GB",
          "weight": "116 g",
          "year": 2011,
          "price": 251,
          "released": "2011-08-14T18:30:00.000Z"
        },
        {
          "brandId": 7,
          "camera": "5.0 MP AF with LED flash, macro, smile detection, panorama (rear); 0.31 MP (front)",
          "cpu": "1.4 GHz Qualcomm Snapdragon MSM8255T Scorpion",
          "display": "3.7\" 480 x 800 Super LCD",
          "gpu": "Adreno 205",
          "id": 35,
          "name": "Samsung Galaxy W GT-I8150[42] [43]",
          "os": "Android 2.3.5 Gingerbread",
          "ram": "512 MB",
          "size": "79.8 cm3 115.5 x 59.8 x 11.55mm",
          "storage": "3.7 GB",
          "weight": "114.7 g",
          "year": 2011,
          "price": 241,
          "released": "2011-02-28T18:30:00.000Z"
        },
        {
          "brandId": 7,
          "camera": "8 MP AF with LED flash, smile detection, ISO control (rear), 1.3 MP (front)",
          "cpu": "1.2 GHz Samsung Hummingbird",
          "display": "4.5\" 480 x 800 Super AMOLED Plus",
          "gpu": null,
          "id": 36,
          "name": "Samsung Infuse 4G",
          "os": "Android 2.2 (upgradable to Gingerbread 2.3.6)",
          "ram": "512 MB",
          "size": "84.3 cm3 132 x 71 x 9 mm",
          "storage": "8 or 16 GB (NAND flash memory)",
          "weight": "139 g",
          "year": 2011,
          "price": 214,
          "released": "2011-07-24T18:30:00.000Z"
        },
        {
          "brandId": 8,
          "camera": "8 MP AF with LED flash, image stabilization, geo-tagging, face and smile detection; 720p HD video recording with continuous autofocus",
          "cpu": "1 GHz Qualcomm MSM8255 Scorpion (Snapdragon)",
          "display": "4.2\" 480 x 854 LED-backlit LCD",
          "gpu": "Adreno 205",
          "id": 37,
          "name": "Sony Ericsson Xperia Arc",
          "os": "Android 2.3",
          "ram": "512 MB",
          "size": "68.5 cm3 125 x 63 x 8.7 mm",
          "storage": "320 MB",
          "weight": "117 g",
          "year": 2011,
          "price": 327,
          "released": "2011-03-09T18:30:00.000Z"
        },
        {
          "brandId": 8,
          "camera": "8 MP AF with LED flash, image stabilization, geo-tagging, face and smile detection, 3D sweep panorama; 720p HD video recording with continuous autofocus, video stabilizer",
          "cpu": "1.4 GHz Qualcomm MSM8255T Scorpion (Snapdragon)",
          "display": "4.2\" 480 x 854 LED-backlit LCD",
          "gpu": "Adreno 205",
          "id": 38,
          "name": "Sony Ericsson Xperia arc S",
          "os": "Android 2.3.4",
          "ram": "512 MB",
          "size": "68.5 cm3 125 x 63 x 8.7 mm",
          "storage": "1,024 MB",
          "weight": "117 g",
          "year": 2011,
          "price": 270,
          "released": "2011-02-22T18:30:00.000Z"
        },
        {
          "brandId": 8,
          "camera": "8 MP, 3264 x 2448 pixels, Exmor-R, face-detection, AF, LED flash, 720p HD video recording",
          "cpu": "1 GHz Qualcomm MSM8255 Snapdragon",
          "display": "3.7\" 480 x 854",
          "gpu": "Adreno 205",
          "id": 39,
          "name": "Sony Ericsson Xperia Neo",
          "os": "Android 2.3",
          "ram": "512 MB",
          "size": "86 cm3 116 x 57 x 13 mm",
          "storage": "380 MB",
          "weight": "126 g",
          "year": 2011,
          "price": 259,
          "released": "2011-07-05T18:30:00.000Z"
        }];
    setTimeout(()=> {res.json(products);}, 1000);
});
*/
  
//practice section
router.get("/getName", function (req,res) {
    console.log("Response Object Meaningful :", res);

    res.json({
        "status":200,
        "name":"Test Trainer Name"//req.query.name
    }) 
});

router.get("/getusers", function (req,res) {
    console.log("Response Object Meaningful :", res);
    
    userDataModel.collection.find((err, data, next) =>{

        err ? res.send({"erro": err}) :
        res.send({
            "Msg":"Below are all the saved user",
            "User" : data
        })
    })    
});

router.get("/saveuser", function (req,res) {
    console.log("Response Object Meaningful :", res);
    
    let userDetails = new userDataModel(req.query);
    console.log(userDetails);

    userDetails.save((err, data, next) =>{

        err ? res.send({"erro": err}) :

        res.send({
            "Msg":"Below user saved successfully",
            "User" : data
        })

    })    

    // res.json({
    //     "status":200,
    //     "name":"Test Trainer Name"//req.query.name
    // }) 
});

//Default call
router.get('*', (req, res) => {     
    //res.sendfile('./index.html');    

    res.json({
        "status":200,
        "uri":"Default URI"
    });
});

module.exports = router;