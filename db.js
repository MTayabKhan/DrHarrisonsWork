const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/example', {useNewUrlParser: true});

const Schema = mongoose.Schema;

const huntersSchema = new Schema({
    name: {
            type: String,
            required: true,
            minlength: 3
    },
    echoes: {
        type: Number,
        required: true,
        minlength: 1
    },
    
    BossKilled:{
        Ludwig: { type: Boolean,
                  required: true,
        },
        Maria:{ type: Boolean,
            required: true,
  },
        OrphanOfKos: { type: Boolean,
            required: true,
  }
    }

});

module.exports = mongoose.model("Hunter", huntersSchema);

