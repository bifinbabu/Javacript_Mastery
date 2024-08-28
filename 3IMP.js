const axios = require("axios");

const fetchParents = async () => {
  try {
    var parentArray = [];
    const results = await axios.get(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
    if (results?.data?.length) {
      results?.data?.map(async (item, index) => {
        try {
          if (index < 10) {
            let parentItem = await axios.get(
              `https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`
            );
            // console.log("Parenr item", parentItem?.data);
            parentArray.push(parentItem?.data);
            console.log(parentArray?.length);
          }
        } catch (error) {
          console.log("Error while fetching item", error);
        }
      });
    }
    console.log("Res", parentArray);
  } catch (error) {
    console.log("Error", error);
  }
};

fetchParents();
