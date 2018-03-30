import axios from "axios";

export default {

  getNYTarticles: function(searchObj){
    return axios.get("/api/articles", {params: searchObj})
  },
  getSavedArticles: function(){
    return axios.get("/api/articles/saved")
  },
  delete: function(id){
    return axios.delete("/api/articles/delete" + id)
},
  saveArticle: function(articleData){
    return axios.post("/api/articles", articleData)
  }
};
