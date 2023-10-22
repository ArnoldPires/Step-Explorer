import { Schema, model } from 'mongoose';
import { genSalt, hash, compare } from 'bcrypt';

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 8
  },
}, { timestamps: true })

UserSchema.pre("save", function save(next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  genSalt(10, (err, salt) => {
    if (err) {
      return next(err)
    }
    hash(user.password, salt, (err, hashedPassword) => {
      if (err) {
        return next(err)
      }
      user.password = hashedPassword;
      next();
    })
  })
})

UserSchema.methods.comparePassword = function comparePassword(
  candidatePassword,
  cb
) {
  compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  })
}

export default model("User", UserSchema)