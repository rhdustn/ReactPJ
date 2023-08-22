const { Attraction, Plan } = require("../models");

exports.SavePlan = async (req, res) => {
  try {
    const { plan, id } = req.body;
    const savePlanTable = await Plan.create({
      plan,
      user_id: id,
    });
    plan.forEach(async (value, index) => {
      const { name, img, attractionLocation } = value;
      const saveAttrTable = await Attraction.create({
        att_name: name,
        north: attractionLocation.latitude,
        east: attractionLocation.longitude,
        start: 0,
      });
    });
  } catch (error) {
    console.log(error);
  }
};
