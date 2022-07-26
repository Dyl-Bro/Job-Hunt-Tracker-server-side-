# Job-Hunt-Tracker-server-side-
server side of job hunt tracking project


--------------------------------------------------------------------------------------------------------------
## User Registration
**Request**...

` POST https://api.jobhunttracker.live/api/v1/accounts/register`

```
var axios = require('axios');
var data = JSON.stringify({
  "first": "Monica",
  "last": "Geller",
  "email": "monicageller@email.com",
  "password": "monicaspassword123"
});

var config = {
  method: 'post',
  url: 'https://api.jobhunttracker.live/api/v1/accounts/register',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

**Returns**...

* MySQL results for success or failure


--------------------------------------------------------------------------------------------------------------
## User LogIn
**Request**...

` POST https://api.jobhunttracker.live/api/v1/accounts/login`

```
var axios = require('axios');
var data = JSON.stringify({
  "email": "jacksparrow@gmail.com",
  "password": "jack!234"
});

var config = {
  method: 'post',
  url: 'http://api.jobhunttracker.live/api/v1/accounts/login',
  headers: { 
    'Content-Type': 'application/json', 
    'Cookie': 'AuthToken=<Auth Token>'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

**Returns**...

* MySQL results for success or failure


--------------------------------------------------------------------------------------------------------------
## Retrieve a User specified by userID
**Request**...

` GET https://api.jobhunttracker.live/api/v1/accounts/:userID`

```
var axios = require('axios');


var config = {
  method: 'post',
  url: 'https://api.jobhunttracker.live/api/v1/accounts/:userID',
  headers: { 
    'Content-Type': 'application/json', 
    'Cookie': 'AuthToken=<Auth Token>'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

**Returns**...

* user object with matching userID specified in url parameters




--------------------------------------------------------------------------------------------------------------
## Create an Application Entry
**Request**...

` POST https://api.jobhunttracker.live/api/v1/applications/`

```
var axios = require('axios');
var data = JSON.stringify({
  "appDate": "22-02-04",
  "companyName": "Tech X",
  "location": "Denver",
  "link": "some_link_to_the_original_job_posting",
  "interviewReceived": "true",
  "offerReceived": "False"
});

var config = {
  method: 'post',
  url: 'https://api.jobhunttracker.live/api/v1/applications/',
  headers: { 
    'Content-Type': 'application/json', 
    'Cookie': 'AuthToken=<Auth Token>'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

**Returns**...

* MySQL results for success or failure
--------------------------------------------------------------------------------------------------------------
## Retrieve a full list applications
**Request**...

` GET https://api.jobhunttracker.live/api/v1/applications/`

```
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.jobhunttracker.live/api/v1/applications/',
  headers: { 
    'Cookie': 'AuthToken=<Auth Token>'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

**Returns**...

* List of application objects belonging to the request user i.e account holder 

--------------------------------------------------------------------------------------------------------------
## Retrieve an application specified by application ID
**Request**...

` GET https://api.jobhunttracker.live/api/v1/applications/:appID`

```
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.jobhunttracker.live/api/v1/applications/:appID',
  headers: { 
    'Cookie': 'AuthToken=<Auth Token>'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

**Returns**...

* Application object with ID matching the request url parameter 
--------------------------------------------------------------------------------------------------------------
## Update an Application to reflect whether or not an interview or offer has been received
**Request**...

` PUT https://api.jobhunttracker.live/api/v1/application/:appID`

```
var axios = require('axios');
var data = JSON.stringify({
  "interview_received": "True",
  "offer_received": "False"
});

var config = {
  method: 'put',
  url: 'https://api.jobhunttracker.live/api/v1/applications/:appID',
  headers: { 
    'Content-Type': 'application/json', 
    'Cookie': 'AuthToken=<Auth Token>'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

**Returns**...

* MySQL response for success or error

--------------------------------------------------------------------------------------------------------------
## Delete an application specified by application ID
**Request**...

` DELETE https://api.jobhunttracker.live/api/v1/applications/:appID`

```
var axios = require('axios');

var config = {
  method: 'delete',
  url: 'https://api.jobhunttracker.live/api/v1/applications/:appID',
  headers: { 
    'Cookie': 'AuthToken=<Auth Token>'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

**Returns**...

* MySQL response for success or error 


--------------------------------------------------------------------------------------------------------------
## Create an Interview Entry
**Request**...

` POST https://api.jobhunttracker.live/api/v1/interviews/:applicationID`

```
var axios = require('axios');
var data = JSON.stringify({
  "positiveNotes": "solved all answers on time",
  "negativeNotes": "None",
  "behavioralInterviewScore": "8",
  "codingInterviewScore": "8",
  "systemDesignInterviewScore": "8",
  "companyName": "company-2"
});

var config = {
  method: 'post',
  url: 'https://api.jobhunttracker.live/api/v1/interviews/3',
  headers: { 'Content-Type': 'application/json', 
    'Cookie': 'AuthToken=<Auth Token>'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

**Returns**...

* MySQL results for success or failure

--------------------------------------------------------------------------------------------------------------
## Update an Interview Entry to reflect an update in coding, behavioral, or system design interview ratings
**Request**...

` PUT https://api.jobhunttracker.live/api/v1/interviews/:interviewID`

```
var axios = require('axios');
var data = JSON.stringify({
  "behavioral_interview_score" : "9",
  "coding_interview_score" : "8",
  "systemDesign_interview_score" : "8"
});

var config = {
  method: 'put',
  url: 'https://api.jobhunttracker.live/api/v1/interviews/:interviewID',
  headers: { 
    'Content-Type': 'application/json', 
    'Cookie': 'AuthToken=<Auth Token>'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

**Returns**...

* MySQL response for success or error
--------------------------------------------------------------------------------------------------------------
## Retrieve a full list of interviews
**Request**...

` GET https://api.jobhunttracker.live/api/v1/interviews/`

```
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.jobhunttracker.live/api/v1/interviews/',
  headers: { 
    'Cookie': 'AuthToken=<Auth Token>'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

**Returns**...

* List of interview objects belonging to the request user i.e account holder 

--------------------------------------------------------------------------------------------------------------
## Retrieve an interview specified by interview ID
**Request**...

` GET https://api.jobhunttracker.live/api/v1/interviews/:interviewID`

```
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.jobhunttracker.live/api/v1/interviews/:interviewID',
  headers: { 
    'Cookie': 'AuthToken=<Auth Token>'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

**Returns**...

* Interview object with ID matching the request url parameter 
--------------------------------------------------------------------------------------------------------------
## Delete an interview specified by interview ID
**Request**...

` DELETE https://api.jobhunttracker.live/api/v1/interviews/:interviewID`

```
var axios = require('axios');

var config = {
  method: 'delete',
  url: 'https://api.jobhunttracker.live/api/v1/interviews/:interviewID',
  headers: { 
    'Cookie': 'AuthToken=<Auth Token>'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

**Returns**...

* MySQL response for success or error 
--------------------------------------------------------------------------------------------------------------
## Create a Contacts Entry
**Request**...

` POST https://api.jobhunttracker.live/api/v1/contacts/:applicationID`

```
var axios = require('axios');
var data = JSON.stringify({
   "first" : "Sponge",
    "last" : "Bob",
    "position": "CTO",
    "company": "Bikini Bottom Consulting",
    "email" : "SpongeBob@gmail.com",
    "phone" : "123-234-3456"
});

var config = {
  method: 'post',
  url: 'https://api.jobhunttracker.live/api/v1/contacts/:applicationID',
  headers: { 'Content-Type': 'application/json', 
    'Cookie': 'AuthToken=<Auth Token>'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

**Returns**...

* MySQL results for success or failure

--------------------------------------------------------------------------------------------------------------
## Retrieve a full list of contacts
**Request**...

` GET https://api.jobhunttracker.live/api/v1/contacts/`

```
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.jobhunttracker.live/api/v1/contacts/',
  headers: { 
    'Cookie': 'AuthToken=<Auth Token>'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

**Returns**...

* List of contact objects belonging to the request user i.e account holder 


--------------------------------------------------------------------------------------------------------------
## Delete a contact specified by contact ID
**Request**...

` DELETE https://api.jobhunttracker.live/api/v1/contacts/:contactID`

```
var axios = require('axios');

var config = {
  method: 'delete',
  url: 'https://api.jobhunttracker.live/api/v1/contacts/:contctsID',
  headers: { 
    'Cookie': 'AuthToken=<Auth Token>'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

**Returns**...

* MySQL response for success or error 

--------------------------------------------------------------------------------------------------------------
## Retrieve an analysis of a user's Behavior Interview Skills
**Request**...

` GET https://api.jobhunttracker.live/api/v1/analytics/behavioral-interview-skill-analysis`

```
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.jobhunttracker.live/api/v1/analytics/behavioral-interview-skill-analysis',
  headers: { 
    'Cookie': 'AuthToken=<Auth Token>'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

--------------------------------------------------------------------------------------------------------------
## Retrieve an analysis of a user's Coding Interview Skills
**Request**...

` GET https://api.jobhunttracker.live/api/v1/analytics/coding-interview-skill-analysis`

```
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.jobhunttracker.live/api/v1/analytics/conding-interview-skill-analysis',
  headers: { 
    'Cookie': 'AuthToken=<Auth Token>'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

--------------------------------------------------------------------------------------------------------------
## Retrieve an analysis of a user's Behavior Interview Skills
**Request**...

` GET https://api.jobhunttracker.live/api/v1/analytics/system-design-interview-skill-analysis`

```
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.jobhunttracker.live/api/v1/analytics/system-design-interview-skill-analysis',
  headers: { 
    'Cookie': 'AuthToken=<Auth Token>'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

--------------------------------------------------------------------------------------------------------------
## Retrieve an analysis of a user's Application to Interview Success Rate
**Request**...

` GET https://api.jobhunttracker.live/api/v1/analytics/interview-success-rate`

```
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.jobhunttracker.live/api/v1/analytics/interview-success-rate',
  headers: { 
    'Cookie': 'AuthToken=<Auth Token>'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

--------------------------------------------------------------------------------------------------------------
## Retrieve an analysis of a user's Interview to Offer Success Rate
**Request**...

` GET https://api.jobhunttracker.live/api/v1/analytics/offer-success-rate`

```
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.jobhunttracker.live/api/v1/analytics/offer-success-rate',
  headers: { 
    'Cookie': 'AuthToken=<Auth Token>'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```


