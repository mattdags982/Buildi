// const baseURL = "http://localhost:3000";
const baseURL = "http://192.168.1.144:3000";

//used in create project component to add a new project to the Projects database
export const createProject = async (formData) => {
  console.log("here");
  try {
    const postedProject = await fetch(baseURL + "/create", {
      method: "POST",
      body: formData,
    });
  } catch (e) {
    console.log(e);
  }
};

//retrieve all projects from Projects database
export const getProjects = async () => {
  try {
    const result = await fetch(baseURL + "/projects");
    return await result.json();
  } catch (e) {
    console.log(e);
  }
};

//retrieve all projects from Projects database
export const UserProjects = async (id) => {
  try {
    const result = await fetch(baseURL + `/userprojects?id=${id}`);
    return await result.json();
  } catch (e) {
    console.log(e);
  }
};

//retrieve one project to render project details page
export const getOneProject = async (id) => {
  try {
    const result = await fetch(baseURL + `/oneProject?id=${id}`);
    return await result.json();
  } catch (e) {
    console.log(e);
  }
};

//BID FUNCTIONS
//add bid to a project

export const createBid = async (
  projectId,
  bidPrice,
  userId,
  userName,
  creatorPic
) => {
  try {
    const result = await fetch(baseURL + "/bid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: projectId,
        bidPrice: bidPrice,
        creatorId: userId,
        creatorName: userName,
        creatorPic: creatorPic,
      }),
    });
  } catch (e) {
    console.log(e);
  }
};
//edit bid value (done by contractor)
export const editBid = async (projectId, bidPrice, userId) => {
  try {
    const result = await fetch(baseURL + "/editbid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: projectId,
        bidPrice: bidPrice,
        creatorId: userId,
      }),
    });
  } catch (e) {
    console.log(e);
  }
};

//client awards bid to contractor
export const awardBidder = async (projectId, creatorId) => {
  try {
    // alert("here");
    const result = await fetch(baseURL + "/awardbid", {
      method: "POST",
      mode: "cors",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: projectId,
        creatorId: creatorId,
      }),
    });
    // alert("here");
  } catch (e) {
    console.log(e);
  }
};

//RFI FUNCTIONS

export const createRFI = async (projectId, question, userId, creatorPic) => {
  try {
    const result = await fetch(baseURL + "/RFI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: projectId,
        question: question,
        creatorId: userId,
        creatorPic: creatorPic,
      }),
    });
  } catch (e) {
    console.log(e);
  }
};

export const editRFI = async (projectId, rfiId, response) => {
  try {
    const result = await fetch(baseURL + "/RFIrespond", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: projectId,
        rfiId: rfiId,
        response: response,
      }),
    });
  } catch (e) {
    console.log(e);
  }
};

//USER FUNCTIONS

export const leaveReview = async (
  rating,
  review,
  creatorFirstName,
  creatorLastName,
  creatorPic,
  bidderId,
  projectId
) => {
  try {
    const result = await fetch(baseURL + "/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bidderId: bidderId,
        projectId: projectId,
        rating: rating,
        review: review,
        creatorFirstName: creatorFirstName,
        creatorLastName: creatorLastName,
        creatorPic: creatorPic,
      }),
    });
  } catch (e) {
    console.log(e);
  }
};

export const register = (formData) => {
  return fetch(`${baseURL}/register`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    body: formData,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const loginUser = (formData) => {
  return fetch(`${baseURL}/login`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    body: formData,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
export const profile = async () => {
  try {
    const result = await fetch(baseURL + "/profile", {
      method: "GET",
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await result.json();
  } catch (e) {
    console.log(e);
  }
};

//retrieve another users profile for viewing without effecting auth
export const getOtherProfile = async (id) => {
  try {
    const result = await fetch(baseURL + `/otherprofile?id=${id}`);
    return await result.json();
  } catch (e) {
    console.log(e);
  }
};

export const logout = async () => {
  try {
    const result = await fetch(baseURL + "/logout", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });
    return await result.json();
  } catch (e) {
    console.log(e);
  }
};
