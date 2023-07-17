const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var slug = require('mongoose-slug-generator');
mongoose.plugin(slug); // tự tạo slug 

const Course = new Schema({ //Tạo ra schema
    name: { type: String, maxLength: 255}, // có thể thêm nhiều điều kiện 
    description : { type: String, maxLength: 600},
    image : { type: String, maxLength: 255},
    videoId : { type: String, maxLength: 255},
    level : { type: String, maxLength: 255},
    slug : { type: String, slug: 'name', unique : true /*render từ thằng name ra */},
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now },
  },{
    timestamps: true
  });

  module.exports = mongoose.model('Course', Course);