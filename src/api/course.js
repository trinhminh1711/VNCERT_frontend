import axios from "axios";
import urls from "../urls/index";
export async function getListCourse() {
  const listCourse = await axios.get(urls.course.listCourse);
  return listCourse;
}
export async function getDetail(course_id) {
    console.log(course_id);
  const detailCourse = await axios.get(urls.course.detailCourse + course_id , {
      id: course_id
  });
  return detailCourse;
}

export async function createCourse(formData) {
    const updateRes = await axios({
      method: "post",
      url: urls.course.createCourse,
      data: formData,
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    });
    return updateRes;
  }