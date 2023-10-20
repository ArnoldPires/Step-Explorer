import { Schema, model } from "mongoose";

const TrailSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    gMaps: {
      type: String,
      required: true,
    },
    difficultly: {
      type: String,
      required: true,
      enum: ["Easy", "Medium", "Hard"],
    },
    length: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
      enum: [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
    },
    routeType: {
      type: String,
      required: false,
      enum: ["Out & Back", "Loop", "Point to Point"],
    },
    suitability: {
      type: String,
      required: false,
      enum: [
        "Dog Friendly",
        "Kid Friendly",
        "Stroller Friendly",
        "Wheelchair Friendly",
        "Paved",
        "Partially Paved",
      ],
    },
    attractions: {
      type: String,
      required: false,
      enum: [
        "Waterfall",
        "Views",
        "Flowers",
        "Lake",
        "River",
        "Forest",
        "Wildlife",
        "Beach",
        "Cave",
        "Hot Springs",
        "Historic Site",
        "Rails Trails",
        "City Walk",
        "Pub Walk",
        "Event",
      ],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    cloudinaryId: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Export the Trail model
const Trail = model("Trail", TrailSchema);

// Define and export the findTrailById function
export async function findTrailById(id) {
  try {
    return await Trail.findById(id);
  } catch (error) {
    throw new Error(error.message);
  }
}

export default Trail;