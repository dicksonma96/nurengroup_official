"use server";

import getDatabase from "../utils/mongoConnection";
import { ObjectId } from "mongodb";

const asyncTimeout = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export async function AdminSignIn(input) {
  // await asyncTimeout(2000);
  const password = process.env.ADMIN_PASSWORD;
  if (input == password) return true;
  return "Incorrect Password";
}

export async function UpdateMedia(formdata) {
  try {
    const db = await getDatabase();
    let id = formdata.get("_id");
    let filter;

    if (id && id.length === 24) {
      filter = { _id: ObjectId.createFromHexString(id) };
    } else {
      filter = { _id: new ObjectId() };
    }

    const collection = await db.collection("mediahub");
    let data = await collection.updateOne(
      filter,
      {
        $set: {
          slug: formdata.get("slug"),
          img: formdata.get("img"),
          title: formdata.get("title"),
          date: new Date(formdata.get("date")),
          description: formdata.get("description"),
          source: JSON.parse(formdata.get("source")),
          active: formdata.get("active") == "true",
        },
      },
      {
        upsert: true,
      }
    );
    console.log(data);
    if (data.modifiedCount == 0 && data.upsertedCount == 0)
      throw { message: "Update failed" };

    return { data: data, success: true };
  } catch (error) {
    console.log(error);
    return { success: false, message: error.message };
  }
}

export async function DeleteMedia(formdata) {
  try {
    const db = await getDatabase();

    const collection = await db.collection("mediahub");
    let data = await collection.deleteOne({
      _id: ObjectId.createFromHexString(formdata.get("_id")),
    });
    if (data.modifiedCount == 0) throw { message: "Delete failed" };

    return { data: data, success: true };
  } catch (error) {
    console.log(error);
    return { success: false, message: error.message };
  }
}

export async function UpdateJob(formdata) {
  try {
    const db = await getDatabase();
    let id = formdata.get("_id");
    let filter;
    if (id && id.length === 24) {
      filter = { _id: ObjectId.createFromHexString(id) };
    } else {
      filter = { _id: new ObjectId() };
    }
    const collection = await db.collection("job-position");
    let data = await collection.updateOne(
      filter,
      {
        $set: {
          position: formdata.get("position"),
          description: formdata.get("description"),
          tags: JSON.parse(formdata.get("tags")),
          salary: formdata.get("salary"),
          location: formdata.get("location"),
          open: formdata.get("open") == "true",
        },
      },
      {
        upsert: true,
      }
    );
    console.log(data);
    if (data.modifiedCount == 0 && data.upsertedCount == 0)
      throw { message: "Update failed" };

    return { data: data, success: true };
  } catch (error) {
    console.log(error);
    return { success: false, message: error.message };
  }
}

export async function DeleteJob(formdata) {
  try {
    const db = await getDatabase();

    const collection = await db.collection("job-position");
    let data = await collection.deleteOne({
      _id: ObjectId.createFromHexString(formdata.get("_id")),
    });
    if (data.modifiedCount == 0) throw { message: "Delete failed" };

    return { data: data, success: true };
  } catch (error) {
    console.log(error);
    return { success: false, message: error.message };
  }
}

export async function UpdateReport(formdata) {
  try {
    const db = await getDatabase();
    let id = formdata.get("_id");
    let filter;
    if (id && id.length === 24) {
      filter = { _id: ObjectId.createFromHexString(id) };
    } else {
      filter = { _id: new ObjectId() };
    }
    const collection = await db.collection("financial-report");
    let data = await collection.updateOne(
      filter,
      {
        $set: {
          title: formdata.get("title"),
          date: new Date(formdata.get("date")),
          type: formdata.get("type"),
          url: formdata.get("url"),
        },
      },
      {
        upsert: true,
      }
    );
    if (data.modifiedCount == 0 && data.upsertedCount == 0)
      throw { message: "Update failed" };

    return { data: data, success: true };
  } catch (error) {
    console.log(error);
    return { success: false, message: error.message };
  }
}

export async function DeleteReport(formdata) {
  try {
    const db = await getDatabase();

    const collection = await db.collection("financial-report");
    let data = await collection.deleteOne({
      _id: ObjectId.createFromHexString(formdata.get("_id")),
    });
    if (data.modifiedCount == 0) throw { message: "Delete failed" };

    return { data: data, success: true };
  } catch (error) {
    console.log(error);
    return { success: false, message: error.message };
  }
}
