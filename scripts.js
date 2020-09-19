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
      level: " 1st",
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
      level: " 2nd",
      availability: [" morning"," day", " evening"],
      skills: [" python", " javascript", " c", " cyber", " sql", " r", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara",
      area: "it",
      teams: " five",
      organisationalskills: [" timeManagement", " delegating", " goalSetting"],
      level: " 3rd",
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
      level: " 4th",
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
      level: " 1stMaster",
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
      level: " 2ndMaster",
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
      level: " 1st",
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
      level: " 2nd",
      availability: [" morning"," day", " evening"],
      skills: [" statics", " steel", " concrete", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara",
      area: "engineering",
      teams: " five",
      organisationalskills: [" timeManagement", " goalSetting"],
      level: " 3rd",
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
      level: " 4th",
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
      level: " 1stMaster",
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
      level: " 2ndMaster",
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
      level: " 1st",
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
      level: " 2nd",
      availability: [" morning"," day", " evening"],
      skills: [" microbiology", " spatial", " conservation", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara",
      area: "environment",
      teams: " five",
      organisationalskills: [" motivating", " timeManagement", " delegating", " goalSetting"],
      level: " 3rd",
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
      level: " 4th",
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
      level: " 1stMaster",
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
      level: " 2ndMaster",
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
      level: " 1st",
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
      level: " 2nd",
      availability: [" morning"," day", " evening"],
      skills: [" onlinemarketing", " internationalmarketing", " storytelling", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara",
      area: "marketing",
      teams: " five",
      organisationalskills: [" timeManagement", " delegating", " goalSetting"],
      level: " 3rd",
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
      level: " 4th",
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
      level: " 1stMaster",
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
      level: " 2ndMaster",
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
      level: " 1st",
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
      level: " 2nd",
      availability: [" morning"," day", " evening"],
      skills: [" bank", " internationalFinance", " capm", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara Williams",
      area: "finance",
      teams: " five",
      organisationalskills: [" timeManagement", " delegating"],
      level: " 3rd",
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
      level: " 4th",
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
      level: " 1stMaster",
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
      level: " 2ndMaster",
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
      level: " 1st",
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
      level: " 2nd",
      availability: [" morning"," day", " evening"],
      skills: [" leading", " organising", " controlling", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara",
      area: "management",
      teams: " five",
      organisationalskills: [" motivating", " timeManagement", " delegating", " goalSetting"],
      level: " 3rd",
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
      level: " 4th",
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
      level: " 1stMaster",
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
      level: " 2ndMaster",
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
      level: " 1st",
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
      level: " 2nd",
      availability: [" morning"," day", " evening"],
      skills: [" nutrition", " exercise", "  promotion", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara",
      area: "healthScience",
      teams: " five",
      organisationalskills: [" motivating", " timeManagement", " delegating", " goalSetting"],
      level: " 3rd",
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
      level: " 4th",
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
      level: " 1stMaster",
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
      level: " 2ndMaster",
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
      level: " 1st",
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
      level: " 2nd",
      availability: [" morning", " day", " evening"],
      skills: [" radiology", " hermatology", " pathology", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara",
      area: "medicine",
      teams: " five",
      organisationalskills: [" motivating", " timeManagement", " delegating", " goalSetting"],
      level: " 3rd",
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
      level: " 4th",
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
      level: " 1stMaster",
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
      level: " 2ndMaster",
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
      level: " 1st",
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
      level: " 2nd",
      availability: [" morning"," day", " evening"],
      skills: [" seafreight", " inventory", " warehousing", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara",
      area: "logistics",
      teams: " five",
      organisationalskills: [" motivating", " timeManagement", " delegating", " goalSetting"],
      level: " 3rd",
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
      level: " 4th",
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
      level: " 1stMaster",
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
      level: " 2ndMaster",
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
      level: " 1st",
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
      level: " 2nd",
      availability: [" morning"," day", " evening"],
      skills: [" cognitivepsychology", " forensicpsychology", " neuropsychology", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara",
      area: "psychology",
      teams: " five",
      organisationalskills: [" motivating", " timeManagement", " delegating", " goalSetting"],
      level: " 3rd",
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
      level: " 4th",
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
      level: " 1stMaster",
      availability: [" morning"," day"],
      skills: [" clinicalpsychology", " neuropsychology", " forensicpsychology", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Jose Santana",
      area: "psychology",
      teams: " ten",
      organisationalskills: [" goalSetting", " conflictManagement"],
      level: " 2ndMaster",
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
      level: " 1st",
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
      level: " 2nd",
      availability: [" morning"," day", " evening"],
      skills: [" housingarchitecture", " designarchitecture", " industrilarchitecture", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara",
      area: "architecture",
      teams: " five",
      organisationalskills: [" motivating", " timeManagement", " delegating", " goalSetting"],
      level: " 3rd",
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
      level: " 4th",
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
      level: " 1stMaster",
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
      level: " 2ndMaster",
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
      level: " 1st",
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
      level: " 2nd",
      availability: [" morning"," day", " evening"],
      skills: [" analytics", " relationship", " communication", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara",
      area: "crm",
      teams: " five",
      organisationalskills: [" motivating", " timeManagement", " delegating", " goalSetting"],
      level: " 3rd",
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
      level: " 4th",
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
      level: " 1stMaster",
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
      level: " 2ndMaster",
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
      level: " 1st",
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
      level: " 2nd",
      availability: [" morning"," day", " evening"],
      skills: [" plasmaphysics", " astrophysics", " nuclearphysics", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara",
      area: "physics",
      teams: " five",
      organisationalskills: [" motivating", " timeManagement", " delegating", " goalSetting"],
      level: " 3rd",
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
      level: " 4th",
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
      level: " 1stMaster",
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
      level: " 2ndMaster",
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
      level: " 1st",
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
      level: " 2nd",
      availability: [" morning"," day", " evening"],
      skills: [" linguistics", " performance", ""],
      phone: "0123456789",
      email: "email@email.com"
    },
    {
      name: "Sara",
      area: "arts",
      teams: " five",
      organisationalskills: [" motivating", " timeManagement", " delegating", " goalSetting"],
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
      level: " 4th",
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
      level: " 1stMaster",
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
      level: " 2ndMaster",
      availability: [" day", " evening"],
      skills: [" digitalarts", ""],
      phone: "0123456789",
      email: "email@email.com"
    }
  ]

// This function records the area user selects and pushes it to session storage, as well as takes user to criteria page.
function areaCheck(){
  var areaList = [];
  var areas = document.getElementsByClassName("areabox");
  for (i = 0; i < areas.length; i++){
    if(areas[i].checked == true){
      areaList.push(areas[i].name);
    }
  }
  sessionStorage.setItem("area", areaList);
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
  var criteria = document.getElementsByClassName('criteriabox');
  for (i = 0; i < criteria.length; i++){
    if(criteria[i].checked == true){
      criteriaList.push(criteria[i].name);
    }
  }
  sessionStorage.setItem("criteria", criteriaList);
  var areaList = sessionStorage.getItem("area", areaList);
  areaList += ".html"
  window.location.href = areaList;
}

// This function records user selected skills to session storage and takes user to results page.
function resultsCheck(){
  var skillList = [];
  var skills = document.getElementsByClassName('skillbox');
  for (i = 0; i < skills.length; i++){
    if(skills[i].checked == true){
      skillList.push(skills[i].name);
    }
  }
  sessionStorage.setItem("skill", skillList);
  window.location.href = "results.html";
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
  var count = 0;

  // Run a loop to check if any matches for selected criteria and skills.
  for (i = 0; i < person.length; i++){
    var allSkills = person[i].teams;
    allSkills += person[i].organisationalskills;
    allSkills += person[i].level;
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
          let result = document.createElement('h2');
          result.setAttribute("class", "resultText");
          result.textContent = person[i].name;
          let back = document.createElement('div');
          back.setAttribute("class", "backresult");
          let backresult= document.createElement('h2');
          backresult.textContent = person[i].phone + '\n' + person[i].email;
          backresult.setAttribute("class", "backresulttext");
          div.appendChild(result);
          back.appendChild(backresult);
          parentdiv.appendChild(div);
          parentdiv.appendChild(back);


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

var card = document.querySelector('.parentdiv');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});

// function that tkes user to the home page
function newSearch(){
  window.location.href = "index.html";
}
