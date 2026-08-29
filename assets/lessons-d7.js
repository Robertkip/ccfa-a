/* Domain 7 — Troubleshooting and Optimisation (3 lessons) */

LESSONS["7.1"] = {
mins: 25,
sum: "A fixed diagnostic order — input, prompt, context, task fit — that finds the cause cheaply. The discipline is refusing to change anything until you know what is wrong.",
know: [
{h:"Diagnose before you correct",
 p:["The instinct on a bad output is to change something. It is the wrong instinct, because a change made without a diagnosis teaches you nothing, may fix the problem for a reason you misunderstand, and often adds a second problem.",
    "The discipline is: <b>establish what is wrong, and why, before changing anything.</b> Naming the failure precisely usually points at the cause directly, and a cause points at a fix.",
    "Start by stating the failure in one specific sentence. Not \"it's not good\" but \"it invented three of the five citations,\" \"it ignored the 300-word limit,\" \"it answered a different question than I asked,\" \"it applied the convention for the first ten items and then stopped.\" That sentence is most of the diagnosis."]},
{h:"The order: cheapest and most likely first",
 p:["Work in this order. It is the same order as lesson 1.3 because iteration and troubleshooting are the same activity approached from different sides, and the exam rewards the sequence itself.",
    "<b>1. The input.</b> Did the source material arrive intact and readable? Truncated pastes, image-only PDFs, spreadsheets whose structure was lost, attachments that silently failed. Cheapest to check and a surprisingly common cause. Check it first every time.",
    "<b>2. The prompt.</b> Is the thing that is missing something you never asked for? Audience, purpose, length, format, exclusions, what to do when uncertain. Most failures stop here.",
    "<b>3. The context.</b> Is this a long session, and was quality better earlier? Run the clean-thread test from lesson 3.4 — same question, fresh conversation, clean inputs. If it answers well, you have your cause.",
    "<b>4. The configuration.</b> In a Project: are the instructions right, is the knowledge current, has something superseded been left in place?",
    "<b>5. The task fit.</b> Only now: is this the wrong feature, the wrong tier, or the wrong thing to be delegating at all?",
    "Working in the other direction — starting with the model — is expensive, slow, and usually leaves the real cause in place."]},
{h:"Signatures worth recognising",
 p:["Certain failures have a distinctive shape, and recognising the shape jumps you straight to the cause.",
    "<b>Confident invented specifics</b> — thin grounding plus a demand for specificity. Supply the source, require attribution, permit \"not stated.\"",
    "<b>Generic, could-apply-to-anything output</b> — no stated purpose or audience.",
    "<b>Part of the request ignored</b> — buried in a long prompt, or genuinely conflicting with another instruction. Move it to the front, or resolve the conflict.",
    "<b>Was fine earlier in the same session, now drifting</b> — context. This is the one people misdiagnose most expensively.",
    "<b>Inconsistent adherence to a standard with no pattern</b> — the rule is in Project knowledge rather than instructions. Lesson 5.1's signature.",
    "<b>Right for most items, wrong for a specific type</b> — an edge case the prompt does not cover. Add the case rather than rewriting the whole thing.",
    "<b>Cites something superseded some of the time</b> — an old document still in the knowledge base."]},
{h:"Change one thing, and know what would prove you right",
 p:["Once you have a hypothesis, test it with the smallest change that would confirm or refute it, and decide in advance what result would tell you which.",
    "This matters because a change that improves the output does not by itself prove your diagnosis — it may have helped for a different reason, leaving you with a false rule you will apply wrongly for months. Predicting the outcome first is what makes the test informative.",
    "If your first hypothesis is wrong, return to the order rather than piling changes on top of each other. Layered untested changes produce a prompt nobody understands and a problem that has not been located.",
    "And when the same class of error survives three well-targeted, different corrections, stop. That is evidence about the task rather than about the wording, and the answer is at step five: wrong feature, wrong tier, or wrong thing to delegate."]}
],
table: {cap:"The diagnostic order",
 head:["#","Check","Typical fix"],
 rows:[
 ["1","Did the input arrive intact and readable?","Re-supply as text; extract the relevant part"],
 ["2","Did the prompt specify what is missing?","Add audience, purpose, format, constraints, uncertainty handling"],
 ["3","Is context degraded — was it better earlier?","Fresh thread with a consolidated summary"],
 ["4","Is the configuration right and current?","Move rules to instructions; remove superseded knowledge"],
 ["5","Is this the wrong feature, tier or task?","Change the approach — last, not first"]]},
keyc: "Predict what a change will do before you make it. A fix that works for a reason you misunderstood leaves you with a false rule, and false rules cost more over time than the original problem did.",
traps: [
 {t:"Changing the model first",
  p:"Step five, not step one. It is expensive, slow, and leaves the actual cause untouched. The exam places this option in almost every troubleshooting item."},
 {t:"Multiple simultaneous changes",
  p:"An option that rewrites the prompt, switches model and adds documents at once cannot tell you what worked. Strong answers isolate one variable."},
 {t:"Skipping the input check",
  p:"'Claude is ignoring the attached spreadsheet' is frequently a spreadsheet that did not arrive usably. It is the cheapest check and the most commonly skipped."}
],
check: {
 q: "A user reports that Claude is \"ignoring\" a 60-page PDF technical manual they attached, giving general answers instead of specifics from it. What should be checked first?",
 o: [
 {t:"Whether a more capable model would handle a document of this length.", c:false, w:"Step five reasoning applied first, and expensive. Nothing yet suggests capability is the constraint."},
 {t:"Whether the PDF arrived as readable text rather than as scanned images, and whether it was truncated on upload.", c:true, w:"The cheapest check and the most likely cause of the exact symptom described — a document that is present but not readable produces precisely this behaviour."},
 {t:"Whether the prompt specified which section of the manual to consult.", c:false, w:"A reasonable step two, and worth doing — but only after confirming the document arrived usably."},
 {t:"Whether the manual should be moved into Project knowledge instead of attached.", c:false, w:"A configuration change made before diagnosis, and it would not help if the file is unreadable in either place."}],
 key: "Scanned or image-only PDFs produce exactly this symptom: the document is attached, and none of its content is available. Check the input before anything else."},
ex: {
 mins: 25,
 title: "Work three real failures through the order",
 obj: ["Practise naming a failure in one specific sentence",
       "Follow the order rather than jumping to the model",
       "Predict outcomes before making changes"],
 steps: [
 {s:"Collect three recent outputs that disappointed you. Write each failure in one specific sentence.", why:"The specific sentence is most of the diagnosis, and writing it is harder than it sounds.", res:"Three precise failure statements."},
 {s:"For each, work the order from step one, checking rather than assuming at each stage.", why:"Working the order deliberately is what builds the reflex; you will skip step one otherwise.", res:"A located cause for each, mostly at steps one to three."},
 {s:"Before making any change, write down what you expect it to do.", why:"Prediction is what turns a change into a test and prevents false rules.", res:"A prediction per change."},
 {s:"Make one change. Compare against your prediction.", why:"Where the result differs from the prediction, your diagnosis was wrong — which is the most valuable outcome of the exercise.", res:"Either a confirmed cause or a corrected understanding."},
 {s:"For any failure surviving three targeted fixes, write why the task may not fit this approach.", why:"Practising the stopping condition is what prevents days spent iterating on the wrong thing.", res:"An explicit decision rather than continued fiddling."},
 {s:"Write down the signature you now recognise fastest.", why:"Signatures are what make diagnosis quick under exam and workplace time pressure.", res:"One pattern you will spot instantly next time."}]},
src: [
 {t:"Prompt engineering overview — Anthropic docs", u:"https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview"},
 {t:"Reduce hallucinations", u:"https://docs.claude.com/en/docs/test-and-evaluate/strengthen-guardrails/reduce-hallucinations"},
 {t:"Claude Help Center", u:"https://support.claude.com"}]
};

LESSONS["7.2"] = {
mins: 20,
sum: "Turning feedback and results into changes: reading the pattern rather than the incident, and knowing which level to fix at — prompt, configuration or process.",
know: [
{h:"Patterns, not incidents",
 p:["A single bad output is an event. Three bad outputs of the same shape is information. The distinction determines whether you should change anything at all.",
    "Responding to every individual complaint produces an accumulation of narrow patches — an instruction set that grows a line per incident, contradicts itself, and dilutes the rules that matter. Lesson 5.3's failure mode arrives exactly this way.",
    "So the discipline is to collect before acting. Which outputs were rejected or heavily corrected? What did reviewers actually change? Where do users go back and re-ask? Which cases get escalated? A fortnight of that data tells you more than a fortnight of reacting.",
    "Correction rate is the most informative signal available in a live workflow, because it is captured for free — the reviewer is already making the correction. If they change the same thing every time, that is your fix, and it is already documented in their edits."]},
{h:"Fix at the right level",
 p:["Once you have a pattern, choose the level to fix at. Fixing too low means repeating the fix forever; fixing too high means disrupting a process to solve a wording problem.",
    "<b>Prompt level</b> — a one-off or personal issue. Change the prompt for that task.",
    "<b>Configuration level</b> — the same correction recurs across a recurring task. It belongs in Project instructions, or the knowledge base needs updating. Any correction you make more than twice is a configuration item.",
    "<b>Process level</b> — the workflow itself is wrong: the checkpoint is in the wrong place, the review capacity does not match volume, a step should not exist. No prompt fixes a misplaced control.",
    "<b>Fit level</b> — the task should not be done this way. The rarest conclusion and sometimes the right one.",
    "The exam presents recurring problems being fixed at the prompt level as a wrong answer, and it presents process redesigns for a one-off wording issue as a wrong answer too. Match the level to the scope of the pattern."]},
{h:"Feedback from people needs interpreting",
 p:["Users report symptoms in their own vocabulary, and the report is rarely the diagnosis.",
    "\"It's got worse\" almost always means a stale knowledge base, a configuration change nobody announced, or a change in the kind of work being sent through it. \"It doesn't understand our business\" usually means missing context that should be in instructions or knowledge. \"I don't trust it\" often traces to one memorable early failure that was never explained. \"It's too slow\" may be latency, or may be a review step that is the real cost.",
    "So the useful follow-up is always for a specific instance: which output, what was wrong with it, what did you expect. One concrete example is worth ten characterisations.",
    "And close the loop. Someone who reports a problem and hears nothing stops reporting, and you lose the signal that was cheapest to collect. Telling them what changed is what keeps the feedback coming."]},
{h:"Verify the change and watch for regression",
 p:["A change is a hypothesis until measured. Check it against the same measure as before, on comparable cases, and be alert to what else moved.",
    "The most common failure here is the trade nobody noticed: an instruction added to fix formatting that reduces completeness; a constraint that improves precision and starts suppressing relevant edge cases; a tighter length limit that quietly drops the caveats.",
    "So when you change a configuration, re-run a small set of previously good cases as well as the failing ones. Catching a regression the week it is introduced is easy; catching it three months later, after it has been silently applied to hundreds of outputs, is not.",
    "Keep a short record of what changed and why. It is what lets someone six months from now understand a line in the instructions well enough to decide whether it still applies."]}
],
table: {cap:"What the report usually means",
 head:["What users say","What it usually is","Where to look"],
 rows:[
 ["It's got worse","Stale knowledge, or an unannounced change","Knowledge currency; the change record"],
 ["It doesn't understand our business","Missing context","Instructions and knowledge"],
 ["I don't trust it","One memorable failure, unexplained","Explain it; show what changed"],
 ["It's too slow","Latency, or a review step","Where the time actually goes"],
 ["I have to fix the same thing every time","A missing instruction","Configuration, not the prompt"]]},
keyc: "Any correction you make more than twice is a configuration item, not a prompt item. Fixing a recurring problem at the prompt level means paying for it again on every future instance.",
traps: [
 {t:"Reacting to a single incident",
  p:"Options that change configuration in response to one complaint are weaker than options that collect a pattern first. One event is not information."},
 {t:"Fixing recurring problems at the prompt level",
  p:"When a scenario says users correct the same thing every time, the answer is a configuration change, not a better prompt for that instance."},
 {t:"Changing without re-testing previously good cases",
  p:"An option that fixes the failing case and stops there misses the regression. Strong answers re-run cases that were working."}
],
check: {
 q: "Over six weeks, reviewers of a Claude-drafted customer response workflow have manually added the account reference number to roughly 80% of drafts. Nobody has complained; it is treated as normal editing. What is the best response?",
 o: [
 {t:"Nothing — reviewers are catching it, which is the control working.", c:false, w:"The control is absorbing a systematic defect. Eighty per cent is a pattern, and it is consuming review capacity that should be spent on judgement."},
 {t:"Add the account reference requirement to the Project instructions and verify on a sample of previously good drafts that nothing else regresses.", c:true, w:"Fixes a recurring correction at the configuration level, and checks for the regression that a new instruction can introduce."},
 {t:"Ask reviewers to report it formally so the pattern can be assessed.", c:false, w:"The pattern is already established at 80% over six weeks. Further data collection delays an obvious fix."},
 {t:"Add the reference number to the prompt each time a draft is requested.", c:false, w:"Fixes it at the prompt level for a recurring task, so it must be remembered on every future instance."}],
 key: "Corrections reviewers make silently are the richest optimisation signal you have, and the easiest to miss precisely because nobody complains."},
ex: {
 mins: 20,
 title: "Mine your corrections for a configuration fix",
 obj: ["Collect a pattern instead of reacting to incidents",
       "Fix at the right level",
       "Check for regression after the change"],
 steps: [
 {s:"For one recurring Claude-assisted task, keep every correction you make for two weeks.", why:"Corrections are captured for free and are the most honest signal about where the workflow is weak.", res:"A list, with repeats."},
 {s:"Group them and count. Anything appearing more than twice is a candidate.", why:"The count is what distinguishes a pattern from an event.", res:"One or two clear candidates."},
 {s:"For each, decide the level: prompt, configuration, process or fit.", why:"Matching level to scope is the judgement this lesson exists to build.", res:"A level per candidate, mostly configuration."},
 {s:"Make one configuration change addressing the strongest candidate.", why:"One change at a time keeps the result interpretable.", res:"An updated instruction set."},
 {s:"Re-run five cases that were previously fine, alongside the failing ones.", why:"This is where you catch the trade you did not intend.", res:"Either confirmation or a regression caught early."},
 {s:"Tell whoever reported or absorbed the problem what changed.", why:"Closing the loop is what keeps the signal coming; silence ends the reporting.", res:"A short note, and continued feedback."}]},
src: [
 {t:"Claude Help Center — Projects", u:"https://support.claude.com"},
 {t:"Prompt engineering overview", u:"https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview"},
 {t:"Anthropic Academy", u:"https://anthropic.skilljar.com"}]
};

LESSONS["7.3"] = {
mins: 20,
sum: "Making a working thing better: remove steps rather than speeding them, target the actual bottleneck, spread what works, and measure the same thing before and after.",
know: [
{h:"Four rules",
 p:["<b>Remove before you accelerate.</b> The cheapest step is the one that no longer happens. An approval that adds nothing, a reformatting step a specified format would eliminate, a summary nobody reads — deleting beats optimising. The Domain 4 caveat still applies: a step that is a control must survive in function even if its form changes.",
    "<b>Target the bottleneck.</b> Improving a step that is not on the critical path changes total time by approximately nothing. Find where the time actually goes, including waiting time, before choosing what to improve.",
    "<b>Spread what works.</b> A prompt that works well for one person is worth more shared. Project instructions, a team template, a documented pattern — this is the highest-return optimisation available and the most consistently neglected.",
    "<b>Measure the same thing before and after.</b> Without a baseline taken the same way, \"it feels faster\" is your only evidence, and it is not evidence."]},
{h:"Where the time actually goes",
 p:["The intuition about where time is spent is usually wrong, and the reason is that waiting is invisible to the person doing the work.",
    "Map the whole cycle including queues: time waiting for review, time waiting for a response, time waiting for someone to be available. In most processes the waiting exceeds the working, sometimes by a large multiple.",
    "This reframes what optimisation means. Making a drafting step 40% faster when the draft then sits in a queue for three days changes cycle time by almost nothing. Reducing the queue — by adding review capacity, by routing simple cases past it, by moving the check earlier — changes it substantially.",
    "The related move is to look at what could happen in parallel that currently happens in sequence, and at approvals whose purpose nobody can state."]},
{h:"From personal fix to shared default",
 p:["Most of the value of individual optimisation is lost because it stays individual. Someone works out a prompt that produces exactly the right output and it lives in their notes.",
    "The progression is: personal prompt, then a shared template, then Project instructions, then a documented team standard. Each step widens the benefit and reduces the variation between people doing the same work — and reduced variation is itself valuable, because consistent output is easier to review.",
    "This is where Domains 5 and 7 join. Optimisation produces something worth standardising; configuration is where it is standardised. A fix that recurs and is not configured is a fix you pay for repeatedly.",
    "Two practical points. Say why the shared version is shaped as it is, so people can adapt it correctly rather than copying it blindly. And give it an owner, or it decays exactly as lesson 5.4 describes."]},
{h:"Knowing when to stop",
 p:["Optimisation has diminishing returns and a point past which it costs more than it saves.",
    "Stop when the remaining inefficiency is smaller than the effort to remove it; when further speed provides no benefit because something downstream is the constraint; when the process is running well and the effort is better spent elsewhere; or when the next increment of speed would come at the cost of a control.",
    "That last one deserves care. Removing a review step always improves cycle time, and it is the easiest thing to justify when the process has been going well for months. The correct question is not whether the step slows things down — it does — but what it is preventing and what the consequence would be without it.",
    "A process that has been optimised until nothing checks anything is fast until the first serious error, and then it is considerably slower than the version with the check."]}
],
table: {cap:"Optimisation moves, ranked",
 head:["Move","Typical impact","Watch for"],
 rows:[
 ["Remove a step entirely","Highest","Is it a control? Function must survive"],
 ["Reduce a queue on the critical path","High","Where the time actually goes, including waiting"],
 ["Share a working prompt as configuration","High and durable","Give it an owner, or it decays"],
 ["Parallelise sequential steps","Moderate","Real dependencies between them"],
 ["Speed up a non-bottleneck step","Near zero","The commonest wasted effort"],
 ["Escalate the model tier","Varies, often none","Rarely the constraint"]]},
keyc: "Removing a review step always improves cycle time — that is not the question. Ask what the step prevents and what the consequence would be without it, because a process optimised until nothing checks anything is fast only until the first serious error.",
traps: [
 {t:"Optimising a step that is not the bottleneck",
  p:"Scenarios name where the time goes and then offer an attractive improvement elsewhere. Check the arithmetic before choosing."},
 {t:"Removing a control because the process has been going well",
  p:"Absence of recent errors is partly evidence the control is working. The question is what it prevents, not whether it costs time."},
 {t:"Leaving a working fix personal",
  p:"An option that resolves an individual's problem without sharing it is weaker than one that moves it into instructions or a team standard for recurring work."}
],
check: {
 q: "A content team's publishing cycle takes nine days: one day drafting, half a day editing, six days waiting for legal review, one and a half days for production. A proposal would use Claude to halve drafting time. What is the strongest assessment?",
 o: [
 {t:"A good improvement — a day saved per piece is meaningful at volume.", c:false, w:"Half a day off a nine-day cycle where six days are queue time is a 5% improvement on the wrong step."},
 {t:"The bottleneck is the six-day legal queue; effort should go there — routing low-risk content past full review, batching submissions, or preparing materials so review is faster — while keeping the review itself for content that needs it.", c:true, w:"Targets the actual constraint, offers concrete queue reductions, and protects the review as a control rather than proposing to remove it."},
 {t:"Remove the legal review step, since six days for a review is disproportionate.", c:false, w:"Removes a control on published content because it costs time, which is the exact trap this lesson names."},
 {t:"Use Claude for the legal review to eliminate the queue.", c:false, w:"Substitutes unverified output for a qualified legal check on published material — the category that requires expert review."}],
 key: "Two thirds of the cycle is one queue. Any optimisation elsewhere is arithmetic that does not add up, and the queue must be reduced without removing what it is for."},
ex: {
 mins: 20,
 title: "Optimise one process against a real baseline",
 obj: ["Find the bottleneck including waiting time",
       "Prefer removal over acceleration, without losing a control",
       "Prove the improvement with the same measure"],
 steps: [
 {s:"Map one process end to end with time per step, including every queue and wait.", why:"Waiting is invisible to the person working and is usually where the time is.", res:"A map where one or two steps dominate."},
 {s:"Record the current cycle time on real recent instances — the baseline.", why:"Without a baseline taken the same way, no later claim of improvement is defensible.", res:"A number, from actual cases."},
 {s:"List every step and ask what it prevents. Mark the controls.", why:"This separates genuine waste from checks that have become invisible.", res:"A clear set of removable steps."},
 {s:"Pick the change with the largest effect on the bottleneck, not the easiest change.", why:"Easy changes off the critical path are the most common way optimisation produces nothing measurable.", res:"One targeted change."},
 {s:"Make it, wait two weeks, and measure the same way.", why:"Same measure, real instances, enough time to be more than a novelty effect.", res:"Evidence rather than an impression."},
 {s:"Turn whatever worked into a shared default — instructions, a template, a documented standard with an owner.", why:"An unshared fix is paid for once and benefits one person; a shared one compounds.", res:"A team standard rather than a personal habit."}]},
src: [
 {t:"Claude Help Center — Projects", u:"https://support.claude.com"},
 {t:"Anthropic Academy", u:"https://anthropic.skilljar.com"},
 {t:"Prompt engineering overview", u:"https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview"}]
};
