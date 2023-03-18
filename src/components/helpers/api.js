import axios from 'axios';

export class CoursesAPI {
  static BASE_URL = 'https://api.wisey.app/api/v1/';
  static TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlZDI3NjMxYS0wNGQ2LTRlYmMtYTI1Ny00YzdhODg0NWMyNWUiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg5Njg5NzksImV4cCI6MTY3OTg2ODk3OX0.AV8Ud0Crrxih8l11kAnjwp_wGOHwdkXPwMxYFSB7W8s';

  constructor() {
    this.page = 1;
    this.query = null;
    this.per_page = 10;
  }

  async getCourses(pageNumber) {
    this.page = pageNumber;
    const response = await axios.get(
      `${CoursesAPI.BASE_URL}core/preview-courses`,
      {
        params: {
          token: CoursesAPI.TOKEN,
          page: this.page,
        },
      }
    );

    return response;
  }

  async getCourseInfo(id) {
    const response = await axios.get(
      `${CoursesAPI.BASE_URL}core/preview-courses/${id}?`,
      {
        params: {
          token: CoursesAPI.TOKEN,
        },
      }
    );

    return response;
  }
}
