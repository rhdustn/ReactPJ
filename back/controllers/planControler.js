const { Attraction, Plan } = require("../models");

exports.SavePlan = async (req, res) => {
  try {
    const { plan, id } = req.body;
    const savePlanTable = await Plan.create({
      plan,
      user_id: id,
    });

    
  } catch (error) {
    console.log(error);
  }
};
