//Service workers
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/HIT238_App/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// List of people and their attributes used for the rearch results
const person = [
      {
      name:"Brad Smith",
      area: "it",
      teams: " zero",
      organisationalskills: [" leadership", " motivating"],
      expertise: [" beginner"],
      gpa: [" low"],
      level: " 1st",
      communication: [" msTeams", " facetoFace", "phoneCall", " email"],
      availability: [" morning"," day"],
      skills: [" python"," javascript", " networking", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "John Silver",
      area: "it",
      teams: " zero",
      organisationalskills: [" delegating", " goalSetting", " conflictManagement"],
      expertise: [" expert"],
      gpa: [" medium"],
      level: " 2nd",
      communication: [" videoCall", " smChat", "phoneCall", " email"],
      availability: [" morning"," day", " evening"],
      skills: [" python", " javascript", " c", " cyber", " sql", " r", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara Buffer",
      area: "it",
      teams: " five",
      organisationalskills: [" timeManagement", " delegating", " goalSetting"],
      expertise: [" expert"],
      gpa: [" medium"],
      level: " 3rd",
      communication: [" msTeams", "smChat", " email"],
      availability: [" evening"],
      skills: [" javascript", " html", " ux", " ai", " python", " neural", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jones Gilligan",
      area: "it",
      teams: " ten",
      organisationalskills: [" motivating"," delegating", " goalSetting", " conflictManagement"],
      expertise: [" intermediate"],
      gpa: [" medium"],
      level: " 4th",
      communication: [" smChat", " facetoFace", "phoneCall", " email", " phoneCall", " msTeams"],
      availability: [" morning"," day", " evening"],
      skills: [" sql"," r", " blockchain", " ux", " ai", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Helmut Wilhelm",
      area: "it",
      teams: " zero",
      organisationalskills: [" leadership"," conflictManagement"],
      expertise: [" intermediate"],
      gpa: [" high"],
      level: " 1stMaster",
      communication: [" smChat", " facetoFace", "videoCall", " email", " phoneCall", " msTeams"],
      availability: [" morning"," day"],
      skills: [" python", " c", " cyber", " sql", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jose Santana",
      area: "it",
      teams: " ten",
      organisationalskills: [" timeManagement", " goalSetting"],
      expertise: [" expert"],
      gpa: [" high"],
      level: " 2ndMaster",
      communication: [" smChat", " email", " msTeams"],
      availability: [" day", " evening"],
      skills: [" python", " javascript", " html", " ux", " blockchain", " ai", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name:"Brad Smith",
      area: "engineering",
      teams: " zero",
      organisationalskills: [" leadership"," motivating"," timeManagement", " delegating"],
      expertise: [" beginner"],
      gpa: [" low"],
      level: " 1st",
      communication: [" msTeams", " facetoFace", "phoneCall", " email"],
      availability: [" morning"," day"],
      skills: [" electrical", " statics", " chemical", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "John Silver",
      area: "engineering",
      teams: " zero",
      organisationalskills: [" delegating", " goalSetting", " conflictManagement"],
      expertise: [" intermediate"],
      gpa: [" medium"],
      level: " 2nd",
      communication: [" videoCall", " smChat", "phoneCall", " email"],
      availability: [" morning"," day", " evening"],
      skills: [" statics", " steel", " concrete", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara Buffer",
      area: "engineering",
      teams: " five",
      organisationalskills: [" timeManagement", " goalSetting"],
      expertise: [" intermediate"],
      gpa: [" medium"],
      level: " 3rd",
      communication: [" msTeams", "smChat", " email"],
      availability: [" evening"],
      skills: [" statics", " mechanical", " concrete", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jones Gilligan",
      area: "engineering",
      teams: " ten",
      organisationalskills: [" goalSetting", " conflictManagement"],
      expertise: [" expert"],
      gpa: [" high"],
      level: " 4th",
      communication: [" smChat", " facetoFace", "phoneCall", " email", " phoneCall", " msTeams"],
      availability: [" morning"," day", " evening", ""],
      skills: [" statics", " steel"],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Helmut Wilhelm",
      area: "engineering",
      teams: " zero",
      organisationalskills: [" timeManagement", " delegating", " goalSetting", " conflictManagement"],
      expertise: [" expert"],
      gpa: [" high"],
      level: " 1stMaster",
      communication: [" smChat", " facetoFace", "videoCall", " email", " phoneCall", " msTeams"],
      availability: [" morning"," day"],
      skills: [" statics", " electrical", " chemical", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jose Santana",
      area: "engineering",
      teams: " ten",
      organisationalskills: [" goalSetting", " conflictManagement"],
      expertise: [" intermediate"],
      gpa: [" high"],
      level: " 2ndMaster",
      communication: [" smChat", " email", " msTeams"],
      availability: [" day", " evening"],
      skills: [" statics", " concrete", " chemical", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name:"Brad Smith",
      area: "environment",
      teams: " zero",
      organisationalskills: [" leadership", " motivating"],
      expertise: [" beginner"],
      gpa: [" low"],
      level: " 1st",
      communication: [" msTeams", " facetoFace", "phoneCall", " email"],
      availability: [" morning"," day"],
      skills: [" turtle"," ecosystem", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "John Silver",
      area: "environment",
      teams: " zero",
      organisationalskills: [" timeManagement", " delegating", " goalSetting", " conflictManagement"],
      expertise: [" expert"],
      gpa: [" medium"],
      level: " 2nd",
      communication: [" videoCall", " smChat", "phoneCall", " email"],
      availability: [" morning"," day", " evening"],
      skills: [" microbiology", " spatial", " conservation", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara Buffer",
      area: "environment",
      teams: " five",
      organisationalskills: [" motivating", " timeManagement", " delegating", " goalSetting"],
      expertise: [" beginner"],
      gpa: [" medium"],
      level: " 3rd",
      communication: [" msTeams", "smChat", " email"],
      availability: [" evening"],
      skills: [" fire", " conservation", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jones Gilligan",
      area: "environment",
      teams: " ten",
      organisationalskills: [" leadership", " timeManagement", " goalSetting", " conflictManagement"],
      expertise: [" intermediate"],
      gpa: [" medium"],
      level: " 4th",
      communication: [" smChat", " facetoFace", "phoneCall", " email", " phoneCall", " msTeams"],
      availability: [" morning"," day", " evening"],
      skills: [" ecosystem"," microbiology", " spatial", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Helmut Wilhelm",
      area: "environment",
      teams: " zero",
      organisationalskills: [" leadership"," motivating", " timeManagement", " delegating", " goalSetting", " conflictManagement"],
      expertise: [" expert"],
      gpa: [" high"],
      level: " 1stMaster",
      communication: [" smChat", " facetoFace", "videoCall", " email", " phoneCall", " msTeams"],
      availability: [" morning"," day"],
      skills: [" ecosystem", " microbiology", " spatial", " fire", " conservation", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jose Santana",
      area: "environment",
      teams: " ten",
      organisationalskills: [" timeManagement"],
      expertise: [" beginner"],
      gpa: [" high"],
      level: " 2ndMaster",
      communication: [" smChat", " email", " msTeams"],
      availability: [" day", " evening"],
      skills: [" turtle", " ecosystem", " microbiology", " spatial", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name:"Brad Smith",
      area: "marketing",
      teams: " zero",
      organisationalskills: [" leadership"," motivating"],
      expertise: [" beginner"],
      gpa: [" low"],
      level: " 1st",
      communication: [" msTeams", " facetoFace", "phoneCall", " email"],
      availability: [" morning"," day"],
      skills: [" social", " advertising", " marketinganalytics", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "John Silver",
      area: "marketing",
      teams: " zero",
      organisationalskills: [" timeManagement", " delegating", " goalSetting", " conflictManagement"],
      expertise: [" intermediate"],
      gpa: [" medium"],
      level: " 2nd",
      communication: [" videoCall", " smChat", "phoneCall", " email"],
      availability: [" morning"," day", " evening"],
      skills: [" onlinemarketing", " internationalmarketing", " storytelling", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara Buffer",
      area: "marketing",
      teams: " five",
      organisationalskills: [" timeManagement", " delegating", " goalSetting"],
      expertise: [" intermediate"],
      gpa: [" medium"],
      level: " 3rd",
      communication: [" msTeams", "smChat", " email"],
      availability: [" evening"],
      skills: [" social", " onlinemarketing", " advertising", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jones Gilligan",
      area: "marketing",
      teams: " ten",
      organisationalskills: [" motivating", " delegating", " goalSetting"],
      expertise: [" expert"],
      gpa: [" high"],
      gpa: [" medium"],
      level: " 4th",
      communication: [" smChat", " facetoFace", "phoneCall", " email", " phoneCall", " msTeams"],
      availability: [" morning"," day", " evening"],
      skills: [" marketinganalytics", " internationalmarketing", " storytelling", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Helmut Wilhelm",
      area: "marketing",
      teams: " zero",
      organisationalskills: [" goalSetting", " conflictManagement"],
      expertise: [" intermediate"],
      gpa: [" high"],
      level: " 1stMaster",
      communication: [" smChat", " facetoFace", "videoCall", " email", " phoneCall", " msTeams"],
      availability: [" morning"," day"],
      skills: [" marketinganalytics", " internationalmarketing", " social", " onlinemarketing", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jose Santana",
      area: "marketing",
      teams: " ten",
      organisationalskills: [" leadership", " timeManagement"],
      expertise: [" expert"],
      gpa: [" high"],
      level: " 2ndMaster",
      communication: [" smChat", " email", " msTeams"],
      availability: [" day", " evening"],
      skills: [" internationalmarketing", " storytelling", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name:"Brad Smith",
      area: "finance",
      teams: " zero",
      organisationalskills: [" leadership"," motivating"],
      expertise: [" beginner"],
      gpa: [" low"],
      level: " 1st",
      communication: [" msTeams", " facetoFace", "phoneCall", " email"],
      availability: [" morning"," day"],
      skills: [" risk", " stock", " bond", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "John Silver",
      area: "finance",
      teams: " zero",
      organisationalskills: [" timeManagement", " delegating", " goalSetting", " conflictManagement"],
      expertise: [" intermediate"],
      gpa: [" medium"],
      level: " 2nd",
      communication: [" videoCall", " smChat", "phoneCall", " email"],
      availability: [" morning"," day", " evening"],
      skills: [" bank", " internationalFinance", " capm", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara Buffer",
      area: "finance",
      teams: " five",
      organisationalskills: [" timeManagement", " delegating"],
      expertise: [" intermediate"],
      gpa: [" medium"],
      level: " 3rd",
      communication: [" msTeams", "smChat", " email"],
      availability: [" evening"],
      skills: [" risk", " bank", " stock", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jones Gilligan",
      area: "finance",
      teams: " ten",
      organisationalskills: [" motivating", " delegating", " conflictManagement"],
      expertise: [" expert"],
      gpa: [" high"],
      level: " 4th",
      communication: [" smChat", " facetoFace", "phoneCall", " email", " phoneCall", " msTeams"],
      availability: [" morning"," day", " evening"],
      skills: [" internationalFinance", " bond", " capm", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Helmut Wilhelm",
      area: "finance",
      teams: " zero",
      organisationalskills: [" motivating", " timeManagement", " delegating", " goalSetting"],
      expertise: [" expert"],
      gpa: [" medium"],
      level: " 1stMaster",
      communication: [" smChat", " facetoFace", "videoCall", " email", " phoneCall", " msTeams"],
      availability: [" morning"," day"],
      skills: [" internationalFinance", " bond", " bank", " stock", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jose Santana",
      area: "finance",
      teams: " ten",
      organisationalskills: [" goalSetting", " conflictManagement"],
      expertise: [" intermediate"],
      gpa: [" high"],
      level: " 2ndMaster",
      communication: [" smChat", " email", " msTeams"],
      availability: [" day", " evening"],
      skills: [" internationalFinance", " risk", " stock", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name:"Brad Smith",
      area: "management",
      teams: " zero",
      organisationalskills: [" leadership"," motivating"],
      expertise: [" beginner"],
      gpa: [" low"],
      level: " 1st",
      communication: [" msTeams", " facetoFace", "phoneCall", " email"],
      availability: [" morning"," day"],
      skills: [" strategic", " planning", " staffing", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "John Silver",
      area: "management",
      teams: " zero",
      organisationalskills: [" timeManagement", " delegating", " goalSetting", " conflictManagement"],
      expertise: [" intermediate"],
      gpa: [" medium"],
      level: " 2nd",
      communication: [" videoCall", " smChat", "phoneCall", " email"],
      availability: [" morning"," day", " evening"],
      skills: [" leading", " organising", " controlling", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara Buffer",
      area: "management",
      teams: " five",
      organisationalskills: [" motivating", " timeManagement", " delegating", " goalSetting"],
      expertise: [" intermediate"],
      gpa: [" medium"],
      level: " 3rd",
      communication: [" msTeams", "smChat", " email"],
      availability: [" evening"],
      skills: [" strategic", " leading", " planning", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jones Gilligan",
      area: "management",
      teams: " ten",
      organisationalskills: [" leadership", " timeManagement", " goalSetting"],
      expertise: [" expert"],
      gpa: [" medium"],
      level: " 4th",
      communication: [" smChat", " facetoFace", "phoneCall", " email", " phoneCall", " msTeams"],
      availability: [" morning"," day", " evening"],
      skills: [" organising", " staffing", " planning", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Helmut Wilhelm",
      area: "management",
      teams: " zero",
      organisationalskills: [" leadership"," motivating", " timeManagement", " delegating", " goalSetting", " conflictManagement"],
      expertise: [" expert"],
      gpa: [" high"],
      level: " 1stMaster",
      communication: [" smChat", " facetoFace", "videoCall", " email", " phoneCall", " msTeams"],
      availability: [" morning"," day"],
      skills: [" organising", " staffing", " strategic", " leading", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jose Santana",
      area: "management",
      teams: " ten",
      organisationalskills: [" goalSetting", " conflictManagement"],
      expertise: [" intermediate"],
      gpa: [" high"],
      level: " 2ndMaster",
      communication: [" smChat", " email", " msTeams"],
      availability: [" day", " evening"],
      skills: [" organising", " strategic", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name:"Brad Smith",
      area: "healthScience",
      teams: " zero",
      organisationalskills: [" leadership", " motivating"],
      expertise: [" beginner"],
      gpa: [" low"],
      level: " 1st",
      communication: [" msTeams", " facetoFace", "phoneCall", " email"],
      availability: [" morning"," day"],
      skills: [" anatomy", " epidemiology", " sociology", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "John Silver",
      area: "healthScience",
      teams: " zero",
      organisationalskills: [" timeManagement", " delegating", " goalSetting", " conflictManagement"],
      expertise: [" intermediate"],
      gpa: [" medium"],
      level: " 2nd",
      communication: [" videoCall", " smChat", "phoneCall", " email"],
      availability: [" morning"," day", " evening"],
      skills: [" nutrition", " exercise", "  promotion", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara Buffer",
      area: "healthScience",
      teams: " five",
      organisationalskills: [" motivating", " timeManagement", " delegating", " goalSetting"],
      expertise: [" intermediate"],
      gpa: [" medium"],
      level: " 3rd",
      communication: [" msTeams", "smChat", " email"],
      availability: [" evening"],
      skills: [" anatomy", " nutrition", " epidemiology", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jones Gilligan",
      area: "healthScience",
      teams: " ten",
      organisationalskills: [" leadership", " timeManagement", " goalSetting"],
      expertise: [" expert"],
      gpa: [" medium"],
      level: " 4th",
      communication: [" smChat", " facetoFace", "phoneCall", " email", " phoneCall", " msTeams"],
      availability: [" morning", " day", " evening"],
      skills: [" exercise", " sociology", "  promotion", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Helmut Wilhelm",
      area: "healthScience",
      teams: " zero",
      organisationalskills: [" motivating", " delegating", " conflictManagement"],
      expertise: [" expert"],
      gpa: [" high"],
      level: " 1stMaster",
      communication: [" smChat", " facetoFace", "videoCall", " email", " phoneCall", " msTeams"],
      availability: [" morning", " day"],
      skills: [" exercise", " epidemiology", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jose Santana",
      area: "healthScience",
      teams: " ten",
      organisationalskills: [" delegating", " goalSetting", " conflictManagement"],
      expertise: [" expert"],
      gpa: [" high"],
      level: " 2ndMaster",
      communication: [" smChat", " email", " msTeams"],
      availability: [" day", " evening"],
      skills: [" sociology", "  promotion", " exercise", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name:"Brad Smith",
      area: "medicine",
      teams: " zero",
      organisationalskills: [" leadership"," motivating"],
      expertise: [" beginner"],
      gpa: [" low"],
      level: " 1st",
      communication: [" msTeams", " facetoFace", "phoneCall", " email"],
      availability: [" morning", " day"],
      skills: [" cardiology", " dermatology", " neurology", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "John Silver",
      area: "medicine",
      teams: " zero",
      organisationalskills: [" timeManagement", " delegating", " goalSetting", " conflictManagement"],
      expertise: [" beginner"],
      gpa: [" medium"],
      level: " 2nd",
      communication: [" videoCall", " smChat", "phoneCall", " email"],
      availability: [" morning", " day", " evening"],
      skills: [" radiology", " hermatology", " pathology", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara Buffer",
      area: "medicine",
      teams: " five",
      organisationalskills: [" motivating", " timeManagement", " delegating", " goalSetting"],
      expertise: [" intermediate"],
      gpa: [" medium"],
      level: " 3rd",
      communication: [" msTeams", "smChat", " email"],
      availability: [" evening"],
      skills: [" cardiology", " radiology", " dermatology", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jones Gilligan",
      area: "medicine",
      teams: " ten",
      organisationalskills: [" leadership", " timeManagement", " goalSetting"],
      expertise: [" intermediate"],
      gpa: [" medium"],
      level: " 4th",
      communication: [" smChat", " facetoFace", "phoneCall", " email", " phoneCall", " msTeams"],
      availability: [" morning", " day", " evening"],
      skills: [" hermatology", " neurology", " pathology", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Helmut Wilhelm",
      area: "medicine",
      teams: " zero",
      organisationalskills: [" motivating", " delegating", " conflictManagement"],
      expertise: [" expert"],
      gpa: [" high"],
      level: " 1stMaster",
      communication: [" smChat", " facetoFace", "videoCall", " email", " phoneCall", " msTeams"],
      availability: [" morning", " day"],
      skills: [" hermatology", " neurology", " cardiology", " radiology", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jose Santana",
      area: "medicine",
      teams: " ten",
      organisationalskills: [" goalSetting", " conflictManagement"],
      expertise: [" expert"],
      gpa: [" high"],
      level: " 2ndMaster",
      communication: [" smChat", " email", " msTeams"],
      availability: [" day", " evening"],
      skills: [" radiology", " dermatology", " neurology", " pathology", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name:"Brad Smith",
      area: "logistics",
      teams: " zero",
      organisationalskills: [" leadership"," motivating"],
      expertise: [" beginner"],
      gpa: [" low"],
      level: " 1st",
      communication: [" msTeams", " facetoFace", "phoneCall", " email"],
      availability: [" morning"," day"],
      skills: [" supply", " airfreight", " transportation", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "John Silver",
      area: "logistics",
      teams: " zero",
      organisationalskills: [" timeManagement", " delegating", " goalSetting", " conflictManagement"],
      expertise: [" intermediate"],
      gpa: [" medium"],
      level: " 2nd",
      communication: [" videoCall", " smChat", "phoneCall", " email"],
      availability: [" morning"," day", " evening"],
      skills: [" seafreight", " inventory", " warehousing", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara Buffer",
      area: "logistics",
      teams: " five",
      organisationalskills: [" motivating", " timeManagement", " delegating", " goalSetting"],
      expertise: [" intermediate"],
      gpa: [" medium"],
      level: " 3rd",
      communication: [" msTeams", "smChat", " email"],
      availability: [" evening"],
      skills: [" supply", " seafreight", " airfreight", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jones Gilligan",
      area: "logistics",
      teams: " ten",
      organisationalskills: [" delegating", " goalSetting", " conflictManagement"],
      expertise: [" intermediate"],
      gpa: [" medium"],
      level: " 4th",
      communication: [" smChat", " facetoFace", "phoneCall", " email", " phoneCall", " msTeams"],
      availability: [" morning"," day", " evening"],
      skills: [" inventory", " transportation", " warehousing", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Helmut Wilhelm",
      area: "logistics",
      teams: " zero",
      organisationalskills: [" leadership", " timeManagement", " goalSetting"],
      expertise: [" intermediate"],
      gpa: [" high"],
      level: " 1stMaster",
      communication: [" smChat", " facetoFace", "videoCall", " email", " phoneCall", " msTeams"],
      availability: [" morning"," day"],
      skills: [" inventory", " transportation", " supply", " seafreight", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jose Santana",
      area: "logistics",
      teams: " ten",
      organisationalskills: [" motivating", " delegating", " conflictManagement"],
      expertise: [" expert"],
      gpa: [" high"],
      level: " 2ndMaster",
      communication: [" smChat", " email", " msTeams"],
      availability: [" day", " evening"],
      skills: [" transportation", " supply", " warehousing", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name:"Brad Smith",
      area: "psychology",
      teams: " zero",
      organisationalskills: [" leadership"," motivating"],
      expertise: [" beginner"],
      gpa: [" low"],
      level: " 1st",
      communication: [" msTeams", " facetoFace", "phoneCall", " email"],
      availability: [" morning"," day"],
      skills: [" python"," javascript", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "John Silver",
      area: "psychology",
      teams: " zero",
      organisationalskills: [" timeManagement", " delegating", " goalSetting", " conflictManagement"],
      expertise: [" intermediate"],
      gpa: [" medium"],
      level: " 2nd",
      communication: [" videoCall", " smChat", "phoneCall", " email"],
      availability: [" morning"," day", " evening"],
      skills: [" cognitivepsychology", " forensicpsychology", " neuropsychology", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara Buffer",
      area: "psychology",
      teams: " five",
      organisationalskills: [" motivating", " timeManagement", " delegating", " goalSetting"],
      expertise: [" expert"],
      gpa: [" medium"],
      level: " 3rd",
      communication: [" msTeams", "smChat", " email"],
      availability: [" evening"],
      skills: [" geriaticpsychology", " clinicalpsychology", " counselingspychology", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jones Gilligan",
      area: "psychology",
      teams: " ten",
      organisationalskills: [" leadership", " timeManagement", " goalSetting"],
      expertise: [" expert"],
      gpa: [" medium"],
      level: " 4th",
      communication: [" smChat", " facetoFace", "phoneCall", " email", " phoneCall", " msTeams"],
      availability: [" morning"," day", " evening"],
      skills: [" cognitivepsychology", " geriaticpsychology", " forensicpsychology", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Helmut Wilhelm",
      area: "psychology",
      teams: " zero",
      organisationalskills: [" motivating", " delegating", " conflictManagement"],
      expertise: [" intermediate"],
      level: " 1stMaster",
      availability: [" morning"," day"],
      communication: [" smChat", " facetoFace", "videoCall", " email", " phoneCall", " msTeams"],
      skills: [" clinicalpsychology", " neuropsychology", " forensicpsychology", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jose Santana",
      area: "psychology",
      teams: " ten",
      organisationalskills: [" goalSetting", " conflictManagement"],
      expertise: [" intermediate"],
      gpa: [" high"],
      level: " 2ndMaster",
      communication: [" smChat", " email", " msTeams"],
      availability: [" day", " evening"],
      skills: [" clinicalpsychology", " neuropsychology", " cognitivepsychology", " geriaticpsychology", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name:"Brad Smith",
      area: "architecture",
      teams: " zero",
      organisationalskills: [" leadership"," motivating"],
      expertise: [" intermediate"],
      gpa: [" low"],
      level: " 1st",
      communication: [" msTeams", " facetoFace", "phoneCall", " email"],
      availability: [" morning"," day"],
      skills: [" interiorarchitecture", " residentialarchitecture", " landscapearchitecture", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "John Silver",
      area: "architecture",
      teams: " zero",
      organisationalskills: [" timeManagement", " delegating", " goalSetting", " conflictManagement"],
      expertise: [" expert"],
      gpa: [" medium"],
      level: " 2nd",
      communication: [" videoCall", " smChat", "phoneCall", " email"],
      availability: [" morning"," day", " evening"],
      skills: [" housingarchitecture", " designarchitecture", " industrilarchitecture", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara Buffer",
      area: "architecture",
      teams: " five",
      organisationalskills: [" motivating", " timeManagement", " delegating", " goalSetting"],
      expertise: [" intermediate"],
      gpa: [" medium"],
      level: " 3rd",
      communication: [" msTeams", "smChat", " email"],
      availability: [" evening"],
      skills: [" interiorarchitecture", " housingarchitecture", " residentialarchitecture", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jones Gilligan",
      area: "architecture",
      teams: " ten",
      organisationalskills: [" leadership", " timeManagement", " goalSetting"],
      expertise: [" expert"],
      gpa: [" medium"],
      level: " 4th",
      communication: [" smChat", " facetoFace", "phoneCall", " email", " phoneCall", " msTeams"],
      availability: [" morning"," day", " evening"],
      skills: [" designarchitecture", " landscapearchitecture", " residentialarchitecture", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Helmut Wilhelm",
      area: "architecture",
      teams: " zero",
      organisationalskills: [" motivating", " delegating", " conflictManagement"],
      expertise: [" intermediate"],
      gpa: [" high"],
      level: " 1stMaster",
      communication: [" smChat", " facetoFace", "videoCall", " email", " phoneCall", " msTeams"],
      availability: [" morning"," day"],
      skills: [" designarchitecture", " landscapearchitecture", " interiorarchitecture", " housingarchitecture", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jose Santana",
      area: "architecture",
      teams: " ten",
      organisationalskills: [" goalSetting", " conflictManagement"],
      expertise: [" expert"],
      gpa: [" high"],
      level: " 2ndMaster",
      communication: [" smChat", " email", " msTeams"],
      availability: [" day", " evening"],
      skills: [" landscapearchitecture", " interiorarchitecture", " designarchitecture", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name:"Brad Smith",
      area: "crm",
      teams: " zero",
      organisationalskills: [" leadership"," motivating"],
      expertise: [" beginner"],
      gpa: [" low"],
      level: " 1st",
      communication: [" msTeams", " facetoFace", "phoneCall", " email"],
      availability: [" morning"," day"],
      skills: [" journey", " microsoft", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "John Silver",
      area: "crm",
      teams: " zero",
      organisationalskills: [" timeManagement", " delegating", " goalSetting", " conflictManagement"],
      expertise: [" intermediate"],
      gpa: [" medium"],
      level: " 2nd",
      communication: [" videoCall", " smChat", "phoneCall", " email"],
      availability: [" morning"," day", " evening"],
      skills: [" analytics", " relationship", " communication", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara Buffer",
      area: "crm",
      teams: " five",
      organisationalskills: [" motivating", " timeManagement", " delegating", " goalSetting"],
      expertise: [" intermediate"],
      gpa: [" medium"],
      level: " 3rd",
      communication: [" msTeams", "smChat", " email"],
      availability: [" evening"],
      skills: [" journey", " analytics", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jones Gilligan",
      area: "crm",
      teams: " ten",
      organisationalskills: [" leadership", " timeManagement", " goalSetting"],
      expertise: [" expert"],
      gpa: [" medium"],
      level: " 4th",
      communication: [" smChat", " facetoFace", "phoneCall", " email", " phoneCall", " msTeams"],
      availability: [" morning"," day", " evening"],
      skills: [" microsoft", " relationship", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Helmut Wilhelm",
      area: "crm",
      teams: " zero",
      organisationalskills: [" motivating", " delegating", " conflictManagement"],
      expertise: [" intermediate"],
      gpa: [" high"],
      level: " 1stMaster",
      communication: [" smChat", " facetoFace", "videoCall", " email", " phoneCall", " msTeams"],
      availability: [" morning"," day"],
      skills: [" communication", " journey", " microsoft", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jose Santana",
      area: "crm",
      teams: " ten",
      organisationalskills: [" motivating", " timeManagement"],
      expertise: [" intermediate"],
      gpa: [" high"],
      level: " 2ndMaster",
      communication: [" smChat", " email", " msTeams"],
      availability: [" day", " evening"],
      skills: [" microsoft", " analytics", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name:"Brad Smith",
      area: "physics",
      teams: " zero",
      organisationalskills: [" leadership"," motivating"],
      expertise: [" beginner"],
      gpa: [" low"],
      level: " 1st",
      communication: [" msTeams", " facetoFace", "phoneCall", " email"],
      availability: [" morning"," day"],
      skills: [" thermodynamics", " magnetism", " geophysics", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "John Silver",
      area: "physics",
      teams: " zero",
      organisationalskills: [" timeManagement", " delegating", " goalSetting", " conflictManagement"],
      expertise: [" intermediate"],
      gpa: [" medium"],
      level: " 2nd",
      communication: [" videoCall", " smChat", "phoneCall", " email"],
      availability: [" morning"," day", " evening"],
      skills: [" plasmaphysics", " astrophysics", " nuclearphysics", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara Buffer",
      area: "physics",
      teams: " five",
      organisationalskills: [" motivating", " timeManagement", " delegating", " goalSetting"],
      expertise: [" expert"],
      gpa: [" medium"],
      level: " 3rd",
      communication: [" msTeams", "smChat", " email"],
      availability: [" evening"],
      skills: [" thermodynamics", " plasmaphysics", " magnetism", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jones Gilligan",
      area: "physics",
      teams: " ten",
      organisationalskills: [" leadership", " timeManagement", " goalSetting"],
      expertise: [" intermediate"],
      gpa: [" medium"],
      level: " 4th",
      communication: [" smChat", " facetoFace", "phoneCall", " email", " phoneCall", " msTeams"],
      availability: [" morning"," day", " evening"],
      skills: [" astrophysics", " nuclearphysics", " geophysics", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Helmut Wilhelm",
      area: "physics",
      teams: " zero",
      organisationalskills: [" motivating", " delegating", " conflictManagement"],
      expertise: [" intermediate"],
      gpa: [" high"],
      level: " 1stMaster",
      communication: [" smChat", " facetoFace", "videoCall", " email", " phoneCall", " msTeams"],
      availability: [" morning"," day"],
      skills: [" thermodynamics", " nuclearphysics", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jose Santana",
      area: "physics",
      teams: " ten",
      organisationalskills: [" motivating", " timeManagement", " delegating"],
      expertise: [" intermediate"],
      gpa: [" high"],
      level: " 2ndMaster",
      communication: [" smChat", " email", " msTeams"],
      availability: [" day", " evening"],
      skills: ["  geophysics", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name:"Brad Smith",
      area: "arts",
      teams: " zero",
      organisationalskills: [" leadership"," motivating"],
      expertise: [" beginner"],
      gpa: [" low"],
      level: " 1st",
      communication: [" msTeams", " facetoFace", "phoneCall", " email"],
      availability: [" morning"," day"],
      skills: [" literature", " creative", " digitalarts", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "John Silver",
      area: "arts",
      teams: " zero",
      organisationalskills: [" timeManagement", " delegating", " goalSetting", " conflictManagement"],
      expertise: [" intermediate"],
      gpa: [" medium"],
      level: " 2nd",
      communication: [" videoCall", " smChat", "phoneCall", " email"],
      availability: [" morning"," day", " evening"],
      skills: [" linguistics", " performance", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara Buffer",
      area: "arts",
      teams: " five",
      organisationalskills: [" motivating", " timeManagement", " delegating", " goalSetting"],
      expertise: [" intermediate"],
      gpa: [" medium"],
      level: " 3rd",
      availability: [" evening"],
      skills: [" literature", " linguistics", " creative", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jones Gilligan",
      area: "arts",
      teams: " ten",
      organisationalskills: [" leadership", " timeManagement", " goalSetting"],
      expertise: [" expert"],
      gpa: [" medium"],
      level: " 4th",
      communication: [" smChat", " facetoFace", "phoneCall", " email", " phoneCall", " msTeams"],
      communication: [" msTeams", "smChat", " email"],
      availability: [" morning"," day", " evening"],
      skills: [" performance", " linguistics", " creative", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Helmut Wilhelm",
      area: "arts",
      teams: " zero",
      organisationalskills: [" motivating", " delegating", " conflictManagement"],
      expertise: [" intermediate"],
      gpa: [" high"],
      level: " 1stMaster",
      communication: [" smChat", " facetoFace", "videoCall", " email", " phoneCall", " msTeams"],
      availability: [" morning"," day"],
      skills: [" performance", " linguistics", " creative", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jose Santana",
      area: "arts",
      teams: " ten",
      organisationalskills: [" goalSetting", " conflictManagement"],
      expertise: [" expert"],
      gpa: [" high"],
      level: " 2ndMaster",
      communication: [" smChat", " email", " msTeams"],
      availability: [" day", " evening"],
      skills: [" digitalarts", ""],
      phone: "0123456789",
      email: "email@email.com"
    }
  ]

// This function records the area user selects and pushes it to session storage, as well as takes user to criteria page.
function areaCheck(){
  var areaList = [];
  var areaText = [];
  var areas = document.getElementsByClassName("areabox");
  var label = document.getElementsByClassName("checklabel");
  for (i = 0; i < areas.length; i++){
    if(areas[i].checked == true){
      areaList.push(areas[i].name);
      areaText.push(label[i].innerText);
    }
  }
  sessionStorage.setItem("area", areaList);
  sessionStorage.setItem("areaBox", areaText);
  window.location.href = "criteria.html";
}

// This function sets the box colour based on clicked boxes on criteria page.
function run(){
  var boxes = document.getElementsByClassName("checkbox");
  var classes = document.getElementsByClassName("checklabel");
  for (i = 0; i < boxes.length; i++){
    if(boxes[i].checked == true){
      classes[i].style.backgroundColor = "#0000FF";
    }else{
      classes[i].style.backgroundColor = "rgb(1, 179, 96)";
    }
  }
}

// This function allows only one of the three options of "Number of teams worked with" to be selected in criteria page.
function toggle1(){
  var list = document.getElementsByClassName("teams");
  if(list[0].checked == true){
    list[1].checked = false;
    list[2].checked = false;
  }run()
}

// This function allows only one of the three options of "Number of teams worked with" to be selected in criteria page.
function toggle2(){
  var list = document.getElementsByClassName("teams");
  if(list[1].checked == true){
    list[0].checked = false;
    list[2].checked = false;
  }run()
}

// This function allows only one of the three options of "Number of teams worked with" to be selected in criteria page.
function toggle3(){
  var list = document.getElementsByClassName("teams");
  if(list[2].checked == true){
    list[0].checked = false;
    list[1].checked = false;
  }run()
}

// This function allows only one of the three options of "year level" to be selected in criteria page.
function toggle4(){
  var list = document.getElementsByClassName("yearlevel");
  if(list[0].checked == true){
    list[1].checked = false;
    list[2].checked = false;
    list[3].checked = false;
    list[4].checked = false;
    list[5].checked = false;
  }run()
}

// This function allows only one of the three options of "year level" to be selected in criteria page.
function toggle5(){
  var list = document.getElementsByClassName("yearlevel");
  if(list[1].checked == true){
    list[0].checked = false;
    list[2].checked = false;
    list[3].checked = false;
    list[4].checked = false;
    list[5].checked = false;
  }run()
}

// This function allows only one of the three options of "year level" to be selected in criteria page.
function toggle6(){
  var list = document.getElementsByClassName("yearlevel");
  if(list[2].checked == true){
    list[1].checked = false;
    list[0].checked = false;
    list[3].checked = false;
    list[4].checked = false;
    list[5].checked = false;
  }run()
}

// This function allows only one of the three options of "year level" to be selected in criteria page.
function toggle7(){
  var list = document.getElementsByClassName("yearlevel");
  if(list[3].checked == true){
    list[1].checked = false;
    list[2].checked = false;
    list[0].checked = false;
    list[4].checked = false;
    list[5].checked = false;
  }run()
}

// This function allows only one of the three options of "year level" to be selected in criteria page.
function toggle8(){
  var list = document.getElementsByClassName("yearlevel");
  if(list[4].checked == true){
    list[1].checked = false;
    list[2].checked = false;
    list[3].checked = false;
    list[0].checked = false;
    list[5].checked = false;
  }run()
}

// This function allows only one of the three options of "year level" to be selected in criteria page.
function toggle9(){
  var list = document.getElementsByClassName("yearlevel");
  if(list[5].checked == true){
    list[1].checked = false;
    list[2].checked = false;
    list[3].checked = false;
    list[4].checked = false;
    list[0].checked = false;
  }run()
}

// This function allows only one of the three options of "Expertise Level" to be selected in criteria page.
function toggle10(){
  var list = document.getElementsByClassName("expertise");
  if(list[0].checked == true){
    list[1].checked = false;
    list[2].checked = false;
  }run()
}

// This function allows only one of the three options of "Expertise Level" to be selected in criteria page.
function toggle11(){
  var list = document.getElementsByClassName("expertise");
  if(list[1].checked == true){
    list[0].checked = false;
    list[2].checked = false;
  }run()
}

// This function allows only one of the three options of "Expertise Level" to be selected in criteria page.
function toggle12(){
  var list = document.getElementsByClassName("expertise");
  if(list[2].checked == true){
    list[0].checked = false;
    list[1].checked = false;
  }run()
}

// This function allows only one of the three options of "Expertise Level" to be selected in criteria page.
function toggle13(){
  var list = document.getElementsByClassName("gpa");
  if(list[0].checked == true){
    list[1].checked = false;
    list[2].checked = false;
  }run()
}

// This function allows only one of the three options of "Expertise Level" to be selected in criteria page.
function toggle14(){
  var list = document.getElementsByClassName("gpa");
  if(list[1].checked == true){
    list[0].checked = false;
    list[2].checked = false;
  }run()
}

// This function allows only one of the three options of "Expertise Level" to be selected in criteria page.
function toggle15(){
  var list = document.getElementsByClassName("gpa");
  if(list[2].checked == true){
    list[0].checked = false;
    list[1].checked = false;
  }run()
}

// This function sets the box colour when clicked on all skill selection pages.
function skillCheck(){
  var boxes = document.getElementsByClassName("skillbox");
  var classes = document.getElementsByClassName("checklabel");
  for (i = 0; i < boxes.length; i++){
    if(boxes[i].checked == true){
      classes[i].style.backgroundColor = "#0000FF";
    }else{
      classes[i].style.backgroundColor = "rgb(1, 179, 96)";
    }
  }
}

// This function takes user from criteria page to skill page based on the area the user selected in the first page.
function move(){
  var criteriaList = [];
  var teamsList = [];
  var expersiteList = [];
  var gpaList = [];
  var organisationalList = [];
  var yearList = [];
  var communicationList = [];
  var availabilityList = [];
  var criteria = document.getElementsByClassName('criteriabox');
  var teams = document.getElementsByClassName('teams');
  var teamsLabel = document.getElementsByClassName('teamsLabel');
  var expertises = document.getElementsByClassName('expertise');
  var expertisesLabel = document.getElementsByClassName('expertiseLabel');
  var gpas = document.getElementsByClassName('gpa');
  var gpasLabel = document.getElementsByClassName('gpaLabel');
  var organisationals = document.getElementsByClassName('organisational');
  var organisationalsLabel = document.getElementsByClassName('organisationalLabel');
  var years = document.getElementsByClassName('yearlevel');
  var yearsLabel = document.getElementsByClassName('yearLabel');
  var communications = document.getElementsByClassName('communicationMethods');
  var communicationsLabel = document.getElementsByClassName('communicationLabel');
  var availabilitys = document.getElementsByClassName('availability');
  var availabilitysLabel = document.getElementsByClassName('availabilityLabel');
  for (i = 0; i < criteria.length; i++){
    if(criteria[i].checked == true){
      criteriaList.push(criteria[i].name);
    }
  }
  for (i = 0; i < teams.length; i++){
    if(teams[i].checked == true){
      teamsList.push(teamsLabel[i].innerText);
    }
  }
  for (i = 0; i < expertises.length; i++){
    if(expertises[i].checked == true){
      expersiteList.push(expertisesLabel[i].innerText);
    }
  }
  for (i = 0; i < gpas.length; i++){
    if(gpas[i].checked == true){
      gpaList.push(gpasLabel[i].innerText);
    }
  }
  for (i = 0; i < organisationals.length; i++){
    if(organisationals[i].checked == true){
      organisationalList.push(organisationalsLabel[i].innerText);
    }
  }
  for (i = 0; i < years.length; i++){
    if(years[i].checked == true){
      yearList.push(yearsLabel[i].innerText);
    }
  }
  for (i = 0; i < communications.length; i++){
    if(communications[i].checked == true){
      communicationList.push(communicationsLabel[i].innerText);
    }
  }
  for (i = 0; i < availabilitys.length; i++){
    if(availabilitys[i].checked == true){
      availabilityList.push(availabilitysLabel[i].innerText);
    }
  }
  sessionStorage.setItem("criteria", criteriaList);
  sessionStorage.setItem("teams", teamsList);
  sessionStorage.setItem("expertises", expersiteList);
  sessionStorage.setItem("gpas", gpaList);
  sessionStorage.setItem("organisationals", organisationalList);
  sessionStorage.setItem("years", yearList);
  sessionStorage.setItem("communications", communicationList);
  sessionStorage.setItem("availabilitys", availabilityList);
  var areaList = sessionStorage.getItem("area", areaList);
  areaList += ".html"
  window.location.href = areaList;
}

// This function records user selected skills to session storage and takes user to results page.
function resultsCheck(){
  var skillList = [];
  var selectedSkills = [];
  var skills = document.getElementsByClassName('skillbox');
  var it = document.getElementsByClassName('itSkill');
  var itLabel = document.getElementsByClassName('itLabel');
  var engineering = document.getElementsByClassName('engineeringSkill');
  var engineeringLabel = document.getElementsByClassName('engineeringLabel');
  var environment = document.getElementsByClassName('environmentSkill');
  var environmentLabel = document.getElementsByClassName('environmentLabel');
  var marketing = document.getElementsByClassName('marketingSkill');
  var marketingLabel = document.getElementsByClassName('marketingLabel');
  var finance = document.getElementsByClassName('financeSkill');
  var financeLabel = document.getElementsByClassName('financeLabel');
  var management = document.getElementsByClassName('managementSkill');
  var managementLabel = document.getElementsByClassName('managementLabel');
  var health = document.getElementsByClassName('healthSkill');
  var healthLabel = document.getElementsByClassName('healthLabel');
  var medicine = document.getElementsByClassName('medicineSkill');
  var medicineLabel = document.getElementsByClassName('medicineLabel');
  var logistics = document.getElementsByClassName('logisticsSkill');
  var logisticsLabel = document.getElementsByClassName('logisticsLabel');
  var psychology = document.getElementsByClassName('psychologySkill');
  var psychologyLabel = document.getElementsByClassName('psychologyLabel');
  var architecture = document.getElementsByClassName('architectureSkill');
  var architectureLabel = document.getElementsByClassName('architectureLabel');
  var crm = document.getElementsByClassName('crmSkill');
  var crmLabel = document.getElementsByClassName('crmLabel');
  var physics = document.getElementsByClassName('physicsSkill');
  var physicsLabel = document.getElementsByClassName('physicsLabel');
  var arts = document.getElementsByClassName('artsSkill');
  var artsLabel = document.getElementsByClassName('artsLabel');
  for (i = 0; i < skills.length; i++){
    if(skills[i].checked == true){
      skillList.push(skills[i].name);
    }
  }
  for (i = 0; i < it.length; i++){
    if(it[i].checked == true){
      selectedSkills.push(" " + itLabel[i].innerText);
    }
  }
  for (i = 0; i < engineering.length; i++){
    if(engineering[i].checked == true){
      selectedSkills.push(" " + engineeringLabel[i].innerText);
    }
  }
  for (i = 0; i < environment.length; i++){
    if(environment[i].checked == true){
      selectedSkills.push(" " + environmentLabel[i].innerText);
    }
  }
  for (i = 0; i < marketing.length; i++){
    if(marketing[i].checked == true){
      selectedSkills.push(" " + marketingLabel[i].innerText);
    }
  }
  for (i = 0; i < finance.length; i++){
    if(finance[i].checked == true){
      selectedSkills.push(" " + financeLabel[i].innerText);
    }
  }
  for (i = 0; i < management.length; i++){
    if(management[i].checked == true){
      selectedSkills.push(" " + managementLabel[i].innerText);
    }
  }
  for (i = 0; i < health.length; i++){
    if(health[i].checked == true){
      selectedSkills.push(" " + healthLabel[i].innerText);
    }
  }
  for (i = 0; i < medicine.length; i++){
    if(medicine[i].checked == true){
      selectedSkills.push(" " + medicineLabel[i].innerText);
    }
  }
  for (i = 0; i < logistics.length; i++){
    if(logistics[i].checked == true){
      selectedSkills.push(" " + logisticsLabel[i].innerText);
    }
  }
  for (i = 0; i < psychology.length; i++){
    if(psychology[i].checked == true){
      selectedSkills.push(" " + psychologyLabel[i].innerText);
    }
  }
  for (i = 0; i < architecture.length; i++){
    if(architecture[i].checked == true){
      selectedSkills.push(" " + architectureLabel[i].innerText);
    }
  }
  for (i = 0; i < crm.length; i++){
    if(crm[i].checked == true){
      selectedSkills.push( " " + crmLabel[i].innerText);
    }
  }
  for (i = 0; i < physics.length; i++){
    if(physics[i].checked == true){
      selectedSkills.push( " " + physicsLabel[i].innerText);
    }
  }
  for (i = 0; i < arts.length; i++){
    if(arts[i].checked == true){
      selectedSkills.push(" " + artsLabel[i].innerText);
    }
  }
  sessionStorage.setItem("skill", skillList);
  sessionStorage.setItem("skillSelected", selectedSkills);
  window.location.href = "results.html";
}

// This function captures the text in the buttons that user presses and moves to sessionStorage
function selectedCriteria(){
  // brings selected criteria information from criterias page
  var areaText = sessionStorage.getItem("areaBox", areaText);
  var teamsList = sessionStorage.getItem("teams", teamsList);
  var expertiseList = sessionStorage.getItem("expertises", expertiseList);
  var gpaList = sessionStorage.getItem("gpas", gpaList);
  var organisationalList = sessionStorage.getItem("organisationals", organisationalList);
  var yearList = sessionStorage.getItem("years", yearList);
  var communicationList = sessionStorage.getItem("communications", communicationList);
  var availabilityList = sessionStorage.getItem("availabilitys", availabilityList);
  var selectedSkills = sessionStorage.getItem("skillSelected", selectedSkills);
  var areaBox = "Selected area: " + areaText + "<br/>";
  var teamsBox = "Number of Teams Worked With: " + teamsList + "<br/>";
  var expertiseBox = "Expersite Level: " + expertiseList + "<br/>";
  var gpaBox = "GPA: " + gpaList + "<br/>";
  var organisationalBox = "Organisational Skills: " + organisationalList + "<br/>";
  var yearBox = "Year Level: " + yearList + "<br/>";
  var communicationBox = "Communication Methods: " + communicationList + "<br/>";
  var availabilityBox = "Availability: " + availabilityList + "<br/>";
  var skillBox = "Selected skills: " + selectedSkills + "<br/>";

  let divContent = document.createElement('div');
  let resultContent = document.createElement('h3');
  resultContent.innerHTML = "Selected criteria for your search result: " + "<br/>" + "<br/>";
  resultContent.innerHTML += areaBox;
  if (teamsList == []){
    teamsBox = "Number of Teams Worked With: NA" + "<br/>";
  }
  if (expertiseList == []){
    expertiseBox = "Expersite Level: NA" + "<br/>";
  }
  if (gpaList == []){
    gpaBox = "GPA: NA" + "<br/>";
  }
  if (organisationalList == []){
    organisationalBox = "Organisational Skills: NA" + "<br/>";
  }
  if (yearList == []){
    yearBox = "Year Level: NA" + "<br/>";
  }
  if (communicationList == []){
    communicationBox = "Communication Methods: NA" + "<br/>";
  }
  if (availabilityList == []){
    availabilityBox = "Availability: NA" + "<br/>";
  }
  if (selectedSkills == []){
    skillBox = "Selected Skills: NA" + "<br/>";
  }
  resultContent.innerHTML += teamsBox;
  resultContent.innerHTML += expertiseBox;
  resultContent.innerHTML += gpaBox;
  resultContent.innerHTML += organisationalBox;
  resultContent.innerHTML += yearBox;
  resultContent.innerHTML += communicationBox;
  resultContent.innerHTML += availabilityBox;
  resultContent.innerHTML += skillBox;
  divContent.appendChild(resultContent);
  document.body.appendChild(divContent);
}


// This code loads the results on the results page.
// The code retrieves the user selections from session sessionStorage.
// Based on the match on the skills and criteria, results will presented on the screen.
function loadResults(){
  var skillList = sessionStorage.getItem("skill", skillList);
  var splitSkillList = skillList.split(",");
  var areaList = sessionStorage.getItem("area", areaList);
  var criteriaList = sessionStorage.getItem("criteria", criteriaList);
  var splitCriteriaList = criteriaList.split(",");
  selectedCriteria();
  var count = 0;

  // Run a loop to check if any matches for selected criteria and skills.
  for (i = 0; i < person.length; i++){
    var allSkills = person[i].teams;
    allSkills += person[i].organisationalskills;
    allSkills += person[i].expertise;
    allSkills += person[i].gpa;
    allSkills += person[i].level;
    allSkills += person[i].communication;
    allSkills += person[i].availability;


    // If there is a match to selected user criteria, this code will run
    if (splitSkillList.every(function(val){return person[i].skills.indexOf(val) >= 0;}) &&
        splitCriteriaList.every(function(val){return allSkills.indexOf(val) >= 0;}) &&
        areaList == person[i].area){
          count += 1;

          let parentdiv = document.createElement('div');
          parentdiv.setAttribute("class", "parentdiv");
          let div = document.createElement('div');
          div.setAttribute("class", "result");
          let result = document.createElement('button');
          result.setAttribute("class", "resultText");
          var name = person[i].name + "<br>";
          var phone = person[i].phone + "<br>";
          var email =  person[i].email + "<br>";
          result.innerHTML = name;
          result.onclick = show;
          let back = document.createElement('div');
          back.setAttribute("class", "backresult");
          let backresult= document.createElement('h2');
          backresult.setAttribute("class", "resultText");
          backresult.innerHTML = phone + email;
          backresult.setAttribute("class", "backresulttext");
          div.appendChild(result);
          back.appendChild(backresult);
          parentdiv.appendChild(div);


          document.body.appendChild(parentdiv);
          div.style.textAlign = "center";
          div.style.border = "thick solid none ";
          div.style.margin = "2% 10% 2% 10%";}


    // If there are no results to show, this code will run and display the message of no results to user
    }if(count < 1){
      let div = document.createElement('div');
      div.setAttribute("class", "result");
      let result = document.createElement('h2');
      div.setAttribute("class", "resultText");
      result.textContent = "No results for selected criteria.";
      div.appendChild(result);

      document.body.appendChild(div);
      div.style.textAlign = "center";
      div.style.border = "thick solid none";
      div.style.margin = "2% 10% 2% 10%";}

      // Button to take user to the beginning to do a new search
      var btn = document.createElement("button");
      btn.innerHTML = "New Search";
      btn.onclick = newSearch;
      document.body.appendChild(btn);
}

// function that takes user to the home page
function newSearch(){
  window.location.href = "index.html";
}

// function that shows people's contact details on the results page when clicking on the name
function show(){
  element = event.srcElement.innerHTML;
  var areaList = sessionStorage.getItem("area", areaList);
  for (i = 0; i < person.length; i++){
    var details = person[i].name + "<br>" + person[i].phone + "<br>" + person[i].email;
    if (person[i].area == areaList && person[i].name.includes(element.substring(0,6)) && element == details){
      var name = person[i].name;
      event.srcElement.innerHTML = name;
    }else if(person[i].area == areaList && person[i].name.includes(element.substring(0,6))){
      var name = person[i].name + "<br>";
      var phone = person[i].phone + "<br>";
      var email =  person[i].email;
      event.srcElement.innerHTML = name + phone + email;
    }
  }
}
