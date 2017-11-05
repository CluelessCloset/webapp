const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: 'fc8c5d971faa4cebaa93be950f22fbc1'
});

app.inputs.create([{
  "url": "https://i.pinimg.com/736x/15/65/21/15652107f176f2f5835ad03888faf348--holiday-sweaters-ugly-christmas-sweater.jpg",
  "concepts": [
    { "id": "ugly", "value": true },
    { "id": "nice", "value": false }
  ]
},{
  "url": "https://i.pinimg.com/736x/95/c9/72/95c972ffaa8759b9a26d3d48cdc56f07--weird-fashion-fashion-looks.jpg",
  "concepts": [
    { "id": "ugly", "value": true },
    { "id": "nice", "value": false }
  ]
},{
  "url": "http://www.sewweekly.com/wp-content/uploads/2012/12/winter-1.jpg",
  "concepts": [
    { "id": "ugly", "value": true },
    { "id": "nice", "value": false }
  ]
},{
  "url": "http://i.telegraph.co.uk/multimedia/archive/02695/john-daly_2695693k.jpg",
  "concepts": [
    { "id": "ugly", "value": true },
    { "id": "nice", "value": false }
  ]
},{
  "url": "http://cdn6.viralscape.com/wp-content/uploads/2014/10/Nicki-Minaj.jpg",
  "concepts": [
    { "id": "ugly", "value": true },
    { "id": "nice", "value": false }
  ]
},{
  "url": "http://images.esellerpro.com/2355/I/120/506/10655%20-%20minion%20face.jpg",
  "concepts": [
    { "id": "ugly", "value": true },
    { "id": "nice", "value": false }
  ]
},{
  "url": "https://images-na.ssl-images-amazon.com/images/I/51wS4yx-RqL._UX385_.jpg",
  "concepts": [
    { "id": "ugly", "value": true },
    { "id": "nice", "value": false }
  ]
},{
  "url": "https://cdn2.bigcommerce.com/server300/86394/images/stencil/original/products/6489/98934/3wm_updated__34197.1502718175.jpg?c=2",
  "concepts": [
    { "id": "ugly", "value": true },
    { "id": "nice", "value": false }
  ]
},{
  "url": "http://cdn1.bigcommerce.com/n-ou1isn/qaxbjhup/products/691/images/4828/mens-elf-festive-elf-pants-2__85468.1476906294.500.900.jpg?c=2",
  "concepts": [
    { "id": "ugly", "value": true },
    { "id": "nice", "value": false }
  ]
},{
  "url": "http://www.rustyzipper.com/full/237670.jpg",
  "concepts": [
    { "id": "ugly", "value": true },
    { "id": "nice", "value": false }
  ]
},{
  "url": "https://images-na.ssl-images-amazon.com/images/I/91M7HJZIO5L._UX342_.jpg",
  "concepts": [
    { "id": "ugly", "value": false },
    { "id": "nice", "value": true }
  ]
},{
  "url": "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/14/_101956094.jpg?fit=fill&fm=jpg&dpr=2&h=368&w=240&quality=45&tradecacheforcash=yes",
  "concepts": [
    { "id": "ugly", "value": false },
    { "id": "nice", "value": true }
  ]
},{
  "url": "https://i.pinimg.com/originals/cd/f0/94/cdf0940777fc9d44a5d0e0e43ea7da1a.jpg",
  "concepts": [
    { "id": "ugly", "value": false },
    { "id": "nice", "value": true }
  ]
},{
  "url": "https://i.pinimg.com/736x/75/37/dd/7537ddc39dafc667395b8250423693a6--flannel-shirts-for-men-bass-pro-shop.jpg",
  "concepts": [
    { "id": "ugly", "value": false },
    { "id": "nice", "value": true }
  ]
},{
  "url": "https://cdn-images-1.medium.com/max/1600/1*sGQL9xjRP0UZTKPhrP02jA.jpeg",
  "concepts": [
    { "id": "ugly", "value": false },
    { "id": "nice", "value": true }
  ]
},{
  "url": "https://lh3.googleusercontent.com/NlWqnHQP8yDCRNnVORtu_jdZB-7bZU6AXx5WFHx5Au8v008Fo2EX76sbuOsbih889UJw2QsasQeYp-jKLW-IG2p-gM2ARJK5PjQRjOi7YMqdVxixKH4OycFSbYhR7tlp0b6X5ACxb0Ep8n5EiXze1Dd_FNMPH7C10lsQMmn5LvtNCvqnsNvFqkMtKGRIgdiO3mVNbSXq7SGdWZHLDpLhKxRielTlHL0qX2qJ596Ie41KuEJU8ot60A3eMTlzOr2w1fW4gClRDADhU_rCdbFVYDvDyPnWJYtgm-eCrc4xTxtX_PCpr7iu8It8ZCXoPtjfSErQvO1ujEQPD-UnwISizvOBiI0AAJhbfrNClrVTXYRjulaGsA9YH6UohKZqiiTiyDFCPj_KYjz4ncKb-Fwa7ZYRfuAPy-IjqVbmdk0U7IGoo2BIsA10YRoYyhraHAExqEPed6v6PTMrWjZlY4F-Sa009nzrYliMyA0Uzf9jwXHA7GrXkgAIaSpi1IXllsA92_KcYT7kjD2g0FrmZWYrQB55z1ahQ4r0GHYY2nSmd6X5Ow445R69PqHq-10zF2pjPVop1MatNd2kBL4QGMceLvLXu_zQAqHkEeQT-qi0hMLU_RHiWM4WA6BQAJAMg2LR8nzpzsLLGIOvlJhHVGm96_zDCSUuvPfb2eAv=w1251-h938-no",
  "concepts": [
    { "id": "ugly", "value": false },
    { "id": "nice", "value": true }
  ]
},{
  "url": "https://lh3.googleusercontent.com/jwE-fp5v8cRMBwAzDo0D2vPmh7kYHfdUSScUnt7a1Ur0LDKooGc4YbbqhjXvwh0c_a1zJmATu6LMClY9uC3HlzosQvty92bbSgtpjN3-eFmX-4HRiTeZhEkxv9CQD7efgrbQdZFdcJKBzpJHPyAfoNTwmnxm4kSqUcvFkufFr3rm3JNaJs6ZANiS6FvpRbAviWD1T27qrlOn3PGKsQvre_L7VpVDxj0VE45QSdyo9EFNxHKyFiwpPTGIumi3o10bERjdazKWXhkMopnWKZdjhNesY5gjrefa8ZLexB9kco5qCGNz_szldjzZb7NfQl6lLb94BSBntNWa13EBuE5Odeo7UwwQUG0tOkV6gY2FRB9TbfdwKZ18ppJqBuq6fpm9PZIC83AN7SDPI6W3zbh-Ue9FsQErNkhCU6liZwE0GLKCspdU2k07LaO7-IzbGxeeV4CWjsoS__ncVSwkJLcvpDg8Yao773Ax0TwZzYb6XN9OGxJNWwDS5PnmbgrA8fSt8zfElTcOIEFBghwu6jCYIWnh7BAKVmBU1odxXFtyWb_N0pPXNmuf38Cutd63M53Xgf6TyJT61GeMhE3bHbSAK263Of9waTvOcvqVc_GwTr3lwlboj6mWnIdhHLUlGlPojWAzLBMHKKTy3PsQgSxnxWCIUP3Wi0EF-4jJ=w1251-h938-no",
  "concepts": [
    { "id": "ugly", "value": false },
    { "id": "nice", "value": true }
  ]
},{
  "url": "https://lh3.googleusercontent.com/t4QkoIedapw-4A-P7bhyjpq0R0DOUX853jdjy2kvXw5uyV2hsa8YKGLSy9h18vse5maJsUVAJxtCqZPQjwqaSJ4VfRjK2Hi2GV5cJIr7e_dk5KvvW9vMvKglmU1-k8Sy_dvZ5LGbGGc4INPL2HiVm2vptuh6IRQE4O0yYJ3SUusAVCmv31diDiRQ3yAqM4BKEYXhVQiQ8RW97aK-cF2hij56QOvXVFKoOZBpi67W7Dm1Aryhc-FeTKxJW5A-C_-xdRG2NTaB8cLFeJxYNF_McYU24yPiXcoIfD9hBsrs3uD_fpOyhm2NEcG_WxWqFOMomUPzTjYCwjU1m1Y4n64nw0dMssBtBTmu7ikEkh0iEhMltA-G4gELQrKDLTotZZRV5tuOfU3Lj6VzJaSIaG_CU6riZaLjbwvAcPD0HHdsty3BV2F9g0mC-Dqtafye-5igy02C0GbDRrI4Hd1ieU2CocjdgCAGwRg8jl4sntRkP_qbLZyq1Y7C2uk_5mi28-aQDBnN1HS26jg6m5yxQcYBG5cJ59BUHb-nTgQABzSByk1e8e1ulp_yMIDlTa64NT8K9FgZO0Bf_z8y_fsOfPd5D06vYZ23diSxgdzl7EVG8afYQwcNrdjrX8-MnhVli7PXWZ99y0XVNUK2WEQSccCkTKYmAIu6iLVnAVwY=w1251-h938-no",
  "concepts": [
    { "id": "ugly", "value": false },
    { "id": "nice", "value": true }
  ]
},{
  "url": "https://i.pinimg.com/736x/89/3c/58/893c58977c00e897414df246b2f350f4--preppy-outfits-classy-outfits.jpg",
  "concepts": [
    { "id": "ugly", "value": false },
    { "id": "nice", "value": true }
  ]
},{
  "url": "https://stylishlyme.com/wp-content/uploads/2016/03/Stylish-Winter-Outfit.jpg",
  "concepts": [
    { "id": "ugly", "value": false },
    { "id": "nice", "value": true }
  ]
},{
  "url": "https://i.pinimg.com/736x/14/39/ff/1439fff8cc5d80457d7098740c019922--easy-outfits-stylish-outfits.jpg",
  "concepts": [
    { "id": "ugly", "value": false },
    { "id": "nice", "value": true }
  ]
},{
  "url": "https://i.pinimg.com/736x/3c/67/fc/3c67fc4e113b9e10cf002c541ef770aa--outfits-for-women-stylish-outfits.jpg",
  "concepts": [
    { "id": "ugly", "value": false },
    { "id": "nice", "value": true }
  ]
},{
  "url": "http://i0.kym-cdn.com/entries/icons/original/000/022/649/url.png",
  "concepts": [
    { "id": "ugly", "value": false },
    { "id": "nice", "value": true }
  ]
},{
  "url": "https://image.spreadshirtmedia.com/image-server/v1/designs/1008317231,width=178,height=178/party-parrot-green.png",
  "concepts": [
    { "id": "ugly", "value": false },
    { "id": "nice", "value": true }
  ]
}]);

exports.createModel = function (inputs) {
    console.log("Create Model");
    app.models.initModel("good cloths").then(
        updateModel
    );
}

function updateModel(model) {
    model.mergeConcepts(["ugly", "nice"]).then(
    trainModel
  );
}

function trainModel(model) {
    console.log("Training Model");
    model.train();
}

function errorHandler(err) {
  console.error(err);
}

exports.predictModel = function(req, res) {
    app.models.predict('good cloths', req.query.image).then(
        function(response) {
            return res.json(response.outputs[0].data.concepts);
        },
        function(err) {
            console.error(err);
        }
    );
}
// 
// exports.clothsMatch = function (req res) {
//     app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(
//         function(response) {
//             console.log(response);
//             return res.jquery(response);
//         },
//         function(err) {
//             console.error(err);
//             return res.jquery(err);
//         }
//     );
// }
