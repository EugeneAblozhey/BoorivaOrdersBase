module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      size: String,
      firstName: String,
      lastName: String,
      tel: String,
      email: String,
      delivery: String,
      message: String,
      pay: String,
      cardNumber: String,
      call: Boolean
    },
    { timestamps: true }
  );

//   return {
//     product: product,
//     size: size,
//     firstName: fName,
//     lastName: lName,
//     tel: tel,
//     email: email,
//     delivery: delivery,
//     message: message,
//     pay: pay,
//     cardNumber: card,
//     call: call
// }

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
