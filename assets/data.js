/* CCAO-F study site — core data. Loaded before the bank files. */
var BANK = {};

var DOMAINS = {
  d1:{i:"01",n:"Prompting and Task Execution",w:14,
    d:"Write prompts that work first time, break large requests into checkable steps, and adapt your approach to the type of task.",
    o:["Create effective prompts for business and technical tasks",
       "Apply task decomposition techniques to structure complex requests",
       "Iterate prompts to improve output quality",
       "Adapt prompting strategies based on task type (analysis, research, drafting, brainstorming)"]},
  d2:{i:"02",n:"Output Evaluation and Validation",w:21,
    d:"Judge whether an output is good enough to use: spotting fabrication, checking claims, and knowing when a human has to look.",
    o:["Evaluate Claude-generated outputs for accuracy and completeness",
       "Identify hallucinations, inconsistencies, and biases in responses",
       "Apply fact-checking and validation techniques",
       "Determine when human review or additional verification is required",
       "Edit, adapt, refine, and compare outputs for the intended audience",
       "Organise and curate information and select appropriate output formats"]},
  d3:{i:"03",n:"Product and Model Selection",w:12,
    d:"Pick the right feature and the right model tier for the job, and manage context before a long session degrades.",
    o:["Select appropriate Claude product features (Projects, research mode, chat, artifacts)",
       "Differentiate between Claude model types (Haiku, Sonnet, Opus)",
       "Align model selection with task requirements (cost, speed, quality)",
       "Understand and manage context limitations and memory considerations"]},
  d4:{i:"04",n:"Workflow Integration and Solution Design",w:16,
    d:"Put Claude into real processes: choosing candidates, designing the human checkpoint, and explaining it to stakeholders.",
    o:["Apply Claude to analyse requirements and use cases",
       "Leverage Claude for research, planning, and process optimisation",
       "Use Claude to support solution design, development, and iteration",
       "Integrate Claude into existing workflows to augment or redesign them",
       "Communicate Claude's value and limitations to stakeholders"]},
  d5:{i:"05",n:"Configuration and Knowledge Management",w:12,
    d:"Set up Projects properly: what belongs in instructions, what belongs in knowledge, and how to keep it current.",
    o:["Configure Claude Projects with instructions and knowledge sources",
       "Manage uploaded knowledge and connectors (e.g. Google Drive, Gmail)",
       "Create effective system-level instructions",
       "Inform, maintain, and update configurations, knowledge sources, and instructions"]},
  d6:{i:"06",n:"Governance, Risk, and Responsible Use",w:15,
    d:"Data sensitivity, policy, and the line between a task you can delegate and a decision that stays with a person.",
    o:["Identify appropriate and inappropriate use cases",
       "Apply data sensitivity, regulatory, and privacy considerations",
       "Follow organisational AI policies and governance standards",
       "Understand the ethical implications of AI usage"]},
  d7:{i:"07",n:"Troubleshooting and Optimisation",w:10,
    d:"Diagnose why an output is weak, fix the actual cause, and turn something that works into a repeatable default.",
    o:["Identify, diagnose, and resolve issues with underperforming prompts or poor outputs",
       "Adjust approach based on feedback and results",
       "Optimise workflows for efficiency and effectiveness"]}
};

var DOM_KEYS = ["d1","d2","d3","d4","d5","d6","d7"];

/* Four non-overlapping papers. Each entry is [startIndex, count] per domain. */
var PAPERS = {
  a30:{name:"Practice Paper A",items:30,mins:60,kind:"half",
       blurb:"Half-length paper, blueprint-weighted. A good first diagnostic.",
       slice:{d1:[0,4],d2:[0,6],d3:[0,4],d4:[0,5],d5:[0,3],d6:[0,5],d7:[0,3]}},
  b30:{name:"Practice Paper B",items:30,mins:60,kind:"half",
       blurb:"Second half-length paper. Entirely different items from Paper A.",
       slice:{d1:[4,4],d2:[6,6],d3:[4,4],d4:[5,5],d5:[3,3],d6:[5,5],d7:[3,3]}},
  c60:{name:"Mock Exam 1",items:60,mins:120,kind:"full",
       blurb:"Full length, full clock. Sit this one under real conditions.",
       slice:{d1:[8,8],d2:[12,13],d3:[8,7],d4:[10,10],d5:[6,7],d6:[10,9],d7:[6,6]}},
  d60:{name:"Mock Exam 2",items:60,mins:120,kind:"full",
       blurb:"Second full-length paper. Use it after you have worked through your weak domains.",
       slice:{d1:[16,8],d2:[25,13],d3:[15,7],d4:[20,10],d5:[13,7],d6:[19,9],d7:[12,6]}}
};

/* Build the ordered item list for a paper: grouped by domain, in blueprint order. */
function buildPaper(key){
  var spec = PAPERS[key], out = [];
  DOM_KEYS.forEach(function(d){
    var s = spec.slice[d];
    if(!s) return;
    var pool = BANK[d] || [];
    for(var i = s[0]; i < s[0] + s[1]; i++){
      if(pool[i]) out.push(Object.assign({d:d, src:d + "-" + i}, pool[i]));
    }
  });
  return out;
}

/* Deterministic shuffle so an item's position varies by paper but is stable per sitting. */
function seededShuffle(arr, seed){
  var a = arr.slice(), s = seed;
  for(var i = a.length - 1; i > 0; i--){
    s = (s * 1103515245 + 12345) % 2147483648;
    var j = s % (i + 1);
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}
