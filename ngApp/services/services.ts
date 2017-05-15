namespace search.Services {

  export class QuestionService {
    private SEARCH_RESOURCE = this.$resource('/api/v1/questions/search/:search');

    constructor(private $resource) {}

    public searchAnswerContent(keywords) {
      return this.SEARCH_RESOURCE.query({search: keywords});
    }

  }



  export class AnswerService {
    private SEARCH_RESOURCE = this.$resource('/api/v1/answers/search/:search');

    constructor(private $resource) {}

    public searchAnswerContent(keywords) {
      return this.SEARCH_RESOURCE.query({search: keywords});
    }

  }

  angular.module('SOS').service('answerService', AnswerService);
  angular.module('SOS').service('questionService', QuestionService);
    }
