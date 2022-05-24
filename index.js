const express = require("express");
const db = require("./db");
const quizmodel = require("./models/quizmodel");
const path = require("path");
const multer = require("multer");
const cors = require("cors");
const bodyParser = require("body-parser");
const xlstojson = require("xls-to-json-lc");
const xlsxtojson = require("xlsx-to-json-lc");
const app = express();
app.use(cors());
app.use(bodyParser.json());

//Multer part
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    var datetimestamp = Date.now();
    cb(
      null,
      file.fieldname +
        "-" +
        datetimestamp +
        "." +
        file.originalname.split(".")[file.originalname.split(".").length - 1]
    );
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    if (
      ["xls", "xlsx"].indexOf(
        file.originalname.split(".")[file.originalname.split(".").length - 1]
      ) === -1
    ) {
      return callback(new Error("Wrong extension type"));
    }
    callback(null, true);
  },
}).single("file");

/*Api path that will upload file */
app.post("/upload", (req, res) => {
  var exceltojson;
  //console.log(req.file);
  upload(req, res, (err) => {
    if (err) {
      res.json({ error_code: 404, err_desc: err });
      return;
    }
    /** Multer gives us file info in req.file object */
    if (!req.file) {
      res.json({ error_code: 404, err_desc: "File not found" });
      return;
    }
    //start convert process
    /** Check the extension of the incoming file and
     *  use the appropriate module
     */

    if (
      req.file.originalname.split(".")[
        req.file.originalname.split(".").length - 1
      ] === "xlsx"
    ) {
      exceltojson = xlsxtojson;
    } else {
      exceltojson = xlstojson;
    }
    exceltojson(
      {
        input: req.file.path,
        output: null, //"output/"+Date.now()+".json",
        lowerCaseHeaders: true,
      },
      function (err, result) {
        if (err) {
         console.log(err);
         return res.status(400).json({ message: 'Someting wrong happend' });
        } else {
         console.log(result);
         return res.status(200).json({ message: 'File uploaded successfully' });
        }
      }
    );

  });
  
  const data = new quizmodel({
      description:req.file //.originalname
  })
 data.save(function(error,res){
  if(error){
   console.log(error)
  }else{
    console.log(res);
  }
});

});

const port = process.env.PORT || 8080;
app.listen(port, () =>
  console.log(`server is listening on url http://localhost:${port}`)
);
