/* Domain 4 — Workflow Integration and Solution Design (5 lessons) */

LESSONS["4.1"] = {
mins: 20,
sum: "Working out what a use case actually is before building anything: eliciting real requirements, spotting the tasks that fit, and rejecting the ones that do not.",
know: [
{h:"Requirements are what people mean, not what they say",
 p:["Requirements work begins with a request — \"we want AI to handle our support inbox\" — that is a solution wearing the costume of a requirement. The job is to get behind it to the actual need: what is slow, what is expensive, what is inconsistent, what does not get done at all.",
    "Claude is genuinely useful here, and the exam expects you to know how. Give it the raw material — interview notes, ticket samples, process documents, meeting transcripts — and ask it to surface stated needs, implied needs, contradictions between stakeholders, and questions that have not been answered. That last category is the highest-value output, because unasked questions are what sink projects.",
    "What it cannot do is decide which requirements matter. Priority depends on strategy, politics and constraints that live in people's heads. Domain 4 items reliably reward answers that use Claude to <i>prepare</i> the decision and leave the decision with a person."]},
{h:"What makes a good candidate use case",
 p:["Five properties, and a candidate should have most of them.",
    "<b>Language-shaped.</b> The work involves reading, writing, summarising, classifying, extracting, explaining or drafting. If the bottleneck is a database join or a payment integration, this is not the tool.",
    "<b>Repeated.</b> Effort spent designing and validating pays back across many instances. Genuine one-offs rarely justify a designed workflow, though they may justify ad hoc use.",
    "<b>Checkable.</b> Someone can tell whether an output is good, at a cost proportionate to the work. If nobody can judge quality, you cannot run it safely — this is the property people forget.",
    "<b>Tolerant at the point of use.</b> Errors are caught by a downstream step, or corrected cheaply, or the output is a draft rather than an action.",
    "<b>Bounded.</b> The scope of a single instance is clear. \"Summarise this ticket thread\" is bounded; \"manage the customer relationship\" is not.",
    "A candidate that fails <i>checkable</i> or fails <i>bounded</i> should be reshaped rather than built."]},
{h:"What to reject or reshape",
 p:["Some requests should be refused, and recognising them is examined in both Domain 4 and Domain 6.",
    "<b>Consequential decisions about people</b> — hiring, firing, credit, discipline, eligibility, clinical judgement. Claude can prepare material; it cannot be the decision-maker. Reshape to a support role.",
    "<b>Work requiring guarantees.</b> If the requirement is that output be provably correct every time, this is the wrong technology. Reshape to draft-plus-verification, or decline.",
    "<b>Tasks whose bottleneck is elsewhere.</b> If the real problem is that three teams disagree about the policy, generating faster documents will produce faster disagreement. This is the most common misdiagnosis in real requirements work.",
    "<b>Sensitive data with no safe path.</b> If the material cannot be shared under your policy and cannot be de-identified, the answer is no until the data question is settled — not a smaller model or a shorter retention period.",
    "<b>Broken processes.</b> Automating a process nobody has fixed encodes the mess and makes it faster. The strong answer here is: fix it, then automate it. This appears often enough in exam scenarios to be worth expecting."]},
{h:"Writing the use case down",
 p:["A use case worth building has six things written down, and the discipline of writing them is what surfaces the problems.",
    "The <b>task</b>, specifically. The <b>trigger</b> — what starts it. The <b>inputs</b> and where they come from. The <b>output</b> and who consumes it. The <b>quality bar</b>: what good looks like and who judges it. And the <b>control</b>: who checks what, before which irreversible step.",
    "If you cannot write the quality bar, you cannot evaluate the solution and you should not build it yet. If you cannot write the control, you have not designed a workflow — you have designed a hope.",
    "A useful test before committing: could someone who was not in the room execute this description? Ambiguity that survives the write-up will show up as inconsistency in production."]}
],
table: {cap:"Assessing a candidate use case",
 head:["Property","Question","If it fails"],
 rows:[
 ["Language-shaped","Is the work reading, writing, classifying or explaining?","Wrong tool — look elsewhere"],
 ["Repeated","Does this happen often enough to repay design?","Use ad hoc; do not build"],
 ["Checkable","Can someone tell whether an output is good, affordably?","Do not proceed — you cannot run it safely"],
 ["Tolerant","Are errors caught or cheap to correct?","Add a control, or reshape to draft-only"],
 ["Bounded","Is one instance clearly scoped?","Decompose into smaller use cases"],
 ["Decision-safe","Does it decide something consequential about a person?","Reshape to support, never to decide"]]},
keyc: "If nobody can tell whether an output is good, at a cost proportionate to the work, you cannot deploy it safely no matter how attractive the use case looks. Checkability is the property that gets skipped and the one that fails projects.",
traps: [
 {t:"Automating a process that is already broken",
  p:"When a scenario describes an inconsistent, undocumented or disputed process, the strong answer fixes or documents it first. Automation encodes whatever it finds, at speed."},
 {t:"Accepting the stated request as the requirement",
  p:"'We want AI to handle X' is a proposed solution. Options that begin building it, rather than establishing what problem X is solving, are weaker."},
 {t:"Using Claude to prioritise the requirements",
  p:"Analysing and structuring requirements is a good use. Deciding which ones matter depends on strategy and constraint knowledge that is not in the material. The decision stays with people."}
],
check: {
 q: "An operations director asks for a Claude workflow to \"handle our supplier onboarding.\" Investigation shows three regional teams each follow a different undocumented process, disagree on which checks are mandatory, and the average onboarding takes eleven days mostly spent waiting for a legal review. What is the best first response?",
 o: [
 {t:"Build the workflow around the fastest region's process, since it is evidently the most efficient.", c:false, w:"Picks a process by proxy without establishing whether it performs the mandatory checks, and encodes an undocumented practice."},
 {t:"Establish and agree the process and its mandatory checks first, and note that the binding delay is the legal review queue — which a drafting workflow will not shorten.", c:true, w:"Refuses to automate an undefined process and correctly identifies that the bottleneck is elsewhere, which is the actual finding."},
 {t:"Use Claude to summarise each region's process and let it recommend which to standardise on.", c:false, w:"Summarising the three is useful; having Claude choose the standard is a decision requiring policy and risk knowledge that is not in the documents."},
 {t:"Automate the document preparation so materials reach legal faster.", c:false, w:"Plausible, but the scenario says the time is spent waiting in the review queue, not preparing documents. It optimises a step that is not the constraint."}],
 key: "Two exam patterns in one scenario: do not automate an undefined process, and check whether the step you are speeding up is actually the bottleneck."},
ex: {
 mins: 30,
 title: "Assess three candidate use cases from your own work",
 obj: ["Apply the six-property test rather than judging by enthusiasm",
       "Practise writing a quality bar and a control",
       "Reject or reshape one candidate deliberately"],
 steps: [
 {s:"List three things people around you have suggested using Claude for.", why:"Real suggestions carry the real ambiguity; invented ones are always well-formed.", res:"Three candidates, at least one vague."},
 {s:"For each, score the six properties honestly. Mark any that fail.", why:"Scoring separately stops a single appealing property carrying a weak candidate.", res:"Usually one strong, one reshapeable, one that should be declined."},
 {s:"For the strongest, write the six-part use case: task, trigger, inputs, output, quality bar, control.", why:"Writing the quality bar is where most candidates reveal that nobody can actually judge the output.", res:"A description someone else could execute."},
 {s:"For the weakest, write one sentence on why it should be declined or reshaped, in terms a sponsor would accept.", why:"Saying no well is a Domain 4 skill and the exam tests the reasoning, not the refusal.", res:"A defensible position you could take into a meeting."},
 {s:"For the middle one, identify whether the real bottleneck is where the requester thinks it is.", why:"Speeding up a step that is not the constraint is the most common wasted AI project.", res:"Either a confirmed bottleneck or a redirected project."}]},
src: [
 {t:"Anthropic Academy — AI fluency", u:"https://anthropic.skilljar.com"},
 {t:"Claude Help Center", u:"https://support.claude.com"},
 {t:"Anthropic usage policy", u:"https://www.anthropic.com/legal/aup"}]
};

LESSONS["4.2"] = {
mins: 20,
sum: "Using Claude on the thinking work — research, planning and process improvement — and knowing which parts of each remain human.",
know: [
{h:"Research: breadth first, verification always",
 p:["Claude is at its strongest early in research, where the task is to map a space rather than settle a fact: what are the approaches, who are the players, what are the arguments, what should I be reading, what am I not asking.",
    "It is at its weakest as a source of specific unverified facts, which is Domain 2's territory and does not soften because the task is labelled research. Every figure, citation and attribution that will inform a decision needs an independent check.",
    "The productive division: use it to <b>find and structure</b>, use sources to <b>confirm</b>. Where research mode is available it improves this substantially, because it gathers with citations you can follow — but a citation is a starting point for verification, not a substitute for it. Following the link is the part that matters.",
    "One under-used move: ask what a well-informed sceptic would say about the emerging conclusion. It surfaces the contrary evidence that a synthesis naturally smooths over."]},
{h:"Planning: it drafts, you decide",
 p:["For planning work Claude is a fast way to produce a structured first draft — a work breakdown, a sequence with dependencies, a risk register, a stakeholder map, a set of options with trade-offs.",
    "Its systematic advantage is coverage: it will not forget the categories a tired person forgets. Its systematic weakness is that it does not know your organisation — which teams are overloaded, which dependency is politically impossible, which risk has already materialised twice, how long things actually take here.",
    "So the pattern is: generate the structure, then apply local knowledge to correct it. A plan accepted as generated is usually generically sensible and specifically wrong, and the exam rewards answers that add the local correction step.",
    "The highest-value planning prompt is not \"write me a plan\" but \"here is my plan — what is missing, what is out of order, and what assumptions is it making that I have not stated?\""]},
{h:"Process optimisation: find the constraint",
 p:["Improving a process starts by finding where the time and errors actually are, which is rarely where people assume. Claude can help analyse process documentation, ticket data and interview notes to locate the pattern.",
    "Two rules that appear in exam scenarios repeatedly. <b>Removing a step beats speeding one up</b> — the cheapest step is the one that no longer happens, and an approval that adds nothing should be deleted rather than accelerated. And <b>optimising a non-bottleneck step achieves nothing</b>; making document preparation 40% faster when the delay is in a review queue changes total time by roughly zero.",
    "The Domain 6 counterweight applies here too: a step that exists as a control must not be optimised away because it looks like overhead. Distinguishing genuine waste from a control that has become invisible is a judgement about consequences, not about efficiency.",
    "And measure before and after, the same way. Otherwise \"it feels faster\" is the only evidence you will have, and it is not evidence."]},
{h:"Keeping the human parts human",
 p:["Across all three activities, the same division holds. Claude covers ground, structures material, surfaces options and drafts. People supply organisational knowledge, judgement about priority, accountability for the decision, and verification of anything factual.",
    "The failure to avoid is a good-looking plan or research synthesis adopted without the local correction step — fluent, comprehensive, and wrong in ways that only someone who knows the organisation would catch.",
    "Practically, this means the review question is never \"is this a good plan?\" but \"where is this plan wrong <i>for us</i>?\" The second question gets answers; the first gets agreement."]}
],
table: {cap:"Division of labour",
 head:["Activity","Claude is strong at","A person must"],
 rows:[
 ["Research","Mapping the space, surfacing what you have not asked","Verify every fact that informs the decision"],
 ["Planning","Structure, coverage, options and trade-offs","Apply local knowledge: capacity, politics, real durations"],
 ["Process work","Analysing documentation and data for patterns","Confirm the bottleneck and protect steps that are controls"],
 ["All three","Drafting and organising at speed","Own the decision and its consequences"]]},
keyc: "The cheapest step is the one that no longer happens — but a step that exists as a control is not waste. Telling genuine overhead from an invisible control is judgement about consequences, not efficiency.",
traps: [
 {t:"Optimising a step that is not the constraint",
  p:"Scenarios often name where the time actually goes, then offer an attractive improvement elsewhere. Check the arithmetic: speeding up a non-bottleneck changes total time by nothing."},
 {t:"Adopting a generated plan without local correction",
  p:"An option that accepts a comprehensive plan as produced is weaker than one that reviews it against real capacity, dependencies and history."},
 {t:"Removing a step that was a control",
  p:"An approval or check that looks like overhead may be the only thing preventing a consequential error. The strong answer asks what the step is preventing before removing it."}
],
check: {
 q: "A team asks Claude to analyse their content review process and it recommends removing a second-reviewer step that adds two days. Investigation shows the second reviewer is the only person who checks regulatory claims in marketing copy. What should happen?",
 o: [
 {t:"Remove the step as recommended; two days is a substantial saving and the first reviewer can absorb the checks.", c:false, w:"Assumes the first reviewer has the regulatory competence, which the scenario does not support, and removes a control on published claims."},
 {t:"Keep the regulatory check but examine whether it can be made faster or moved earlier — the step is a control, and its function has to survive any redesign of its form.", c:true, w:"Separates the step's function from its current shape, protects the control, and still pursues the improvement."},
 {t:"Replace the second reviewer with a Claude check of regulatory claims.", c:false, w:"Substitutes an unverified output for a qualified human check on published regulated claims — the exact category that requires expert review."},
 {t:"Keep the process unchanged, since any change to a regulatory control is too risky.", c:false, w:"Overcorrects. The control must survive; its current form need not."}],
 key: "Ask what a step is preventing before removing it. A control can usually be made faster or moved earlier; it cannot be deleted because it costs time."},
ex: {
 mins: 30,
 title: "Improve one real process end to end",
 obj: ["Locate the actual bottleneck rather than the assumed one",
       "Distinguish waste from controls",
       "Measure the same thing before and after"],
 steps: [
 {s:"Pick a process you are part of. Write out the steps and estimate the time each takes, including waiting time.", why:"Waiting time is where the delay usually is, and it is the part people leave off the diagram.", res:"A step list with durations, dominated by one or two steps."},
 {s:"Ask Claude to analyse the list for redundancy, sequencing problems and steps that could be removed or parallelised.", why:"Coverage is where it helps most — it will not skip the awkward step you have stopped noticing.", res:"A candidate list, some of which will be wrong."},
 {s:"For every removal candidate, ask what that step is preventing. Mark any that is a control.", why:"This is the judgement the exercise exists to build, and it is the difference between an improvement and an incident.", res:"A shorter list of genuine waste."},
 {s:"Check whether your best candidate is actually on the critical path.", why:"Improving a non-bottleneck is the most common way process work produces no measurable benefit.", res:"Either a confirmed target or a redirect."},
 {s:"Record the current cycle time, make one change, and measure again the same way after two weeks.", why:"Same measure before and after is the only way to know whether anything improved.", res:"Evidence rather than an impression."}]},
src: [
 {t:"Anthropic Academy", u:"https://anthropic.skilljar.com"},
 {t:"Claude Help Center — research and Projects", u:"https://support.claude.com"},
 {t:"Prompt engineering overview", u:"https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview"}]
};

LESSONS["4.3"] = {
mins: 20,
sum: "Designing and building a solution with Claude in the loop: exploring options before committing, prototyping cheaply, and iterating against a criterion rather than a feeling.",
know: [
{h:"Widen before you narrow",
 p:["Most solution designs are worse than they needed to be because the first workable idea got built. Claude makes it nearly free to explore alternatives before committing, and the exam rewards designs that show evidence of having done so.",
    "Useful moves: ask for several distinct approaches with their trade-offs rather than a recommendation; ask how this problem is solved in an adjacent industry; ask what would have to be true for a rejected option to be the right one; ask for the argument against your preferred approach.",
    "The discipline from lesson 1.4 applies — generate first, evaluate second, in separate passes. Asking for options and a recommendation in one prompt collapses the range, because the recommendation shapes which options get offered."]},
{h:"Prototype to answer a question",
 p:["A prototype exists to resolve a specific uncertainty, not to demonstrate effort. Before building one, write the question it answers: will this classification be accurate enough on our real data? Will reviewers accept a draft in this shape? Does the output format work in the downstream system?",
    "Build the smallest thing that answers the question, and test it on real material rather than clean examples. Real data is messy, inconsistent and full of cases nobody described, which is precisely why prototypes on invented examples succeed and production fails.",
    "Then be willing to conclude that the answer is no. A prototype that shows the approach does not work has done its job and saved the project; treating a negative result as a failure is how organisations build things they were warned about.",
    "Artifacts are the natural surface for this kind of iteration — a persistent object you revise rather than a chat you regenerate."]},
{h:"Iterate against criteria",
 p:["Iteration without a stated criterion converges on whatever the person iterating happens to like on the day. Write down what \"good enough to ship\" means before you start refining, in terms someone else could apply.",
    "For a workflow that means an accuracy bar on a real sample, an acceptable rate and type of error, a review burden the process can sustain, and a measurable improvement over what happens today. That last one is the baseline, and skipping it is why so many deployments cannot demonstrate value afterwards.",
    "Test against the awkward cases deliberately: the edge cases, the malformed inputs, the ambiguous ones, the ones an adversarial user would send. A solution validated only on typical cases will meet the atypical ones in production.",
    "And measure the same way each round. Changing the evaluation set between iterations makes improvement unmeasurable, which is a surprisingly common self-inflicted wound."]},
{h:"Design the failure, not just the success",
 p:["Every design decision should have an answer to \"what happens when this goes wrong?\" — because it will, and the difference between a robust workflow and a fragile one is entirely in what happens next.",
    "Ask: how would we know? Something must surface the failure — a review step, a monitored metric, a user who can report it. A failure nobody detects is the expensive kind.",
    "Ask: what does it cost? A wrong draft caught by a reviewer is cheap. A wrong figure in a published document is not.",
    "Ask: how do we recover? If an error reaches a customer, what is the correction path, and how fast is it?",
    "Ask: what is the fallback? When the workflow cannot handle a case, where does it go? A queue with a named owner is a design. \"It will be fine\" is not.",
    "This is the part that separates a demonstration from a system, and it is heavily represented in the exam's stronger answer options."]}
],
table: {cap:"Design checkpoints",
 head:["Stage","The question","Weak version"],
 rows:[
 ["Options","What are three genuinely different approaches?","Building the first idea that works"],
 ["Prototype","What uncertainty does this resolve?","A demo on clean invented examples"],
 ["Criteria","What does good enough mean, measurably?","'It looks good to me'"],
 ["Baseline","How does today's process perform?","No baseline, so no provable improvement"],
 ["Edge cases","What are the awkward and adversarial inputs?","Tested only on typical cases"],
 ["Failure","How would we know, what does it cost, how do we recover?","Assuming it works"]]},
keyc: "Record the baseline before you change anything. Without a measurement of today's process, taken the same way, you cannot demonstrate improvement later — and the improvement is what you will be asked about.",
traps: [
 {t:"Prototyping on clean examples",
  p:"An option that validates on curated or invented data is weaker than one that tests on real, messy material. Real inputs are where designs fail."},
 {t:"Iterating with no stated criterion",
  p:"Options describing refinement until stakeholders are happy are weaker than options naming an accuracy bar and an acceptable error profile before refining."},
 {t:"No fallback for cases the workflow cannot handle",
  p:"A design without a route for the unhandled case is incomplete. Strong answers name where those go and who owns them."}
],
check: {
 q: "A team has prototyped a Claude workflow that drafts responses to routine procurement queries. It performs well on the 30 examples they assembled. What is the most important next step before piloting?",
 o: [
 {t:"Extend the prototype to cover non-routine queries as well, to maximise coverage.", c:false, w:"Widens scope before the narrow case is validated on real data, and non-routine is where the judgement risk sits."},
 {t:"Test it against a random sample of real recent queries including malformed and ambiguous ones, define the accuracy bar and the fallback route for cases it cannot handle, and record how the current process performs as a baseline.", c:true, w:"Covers the three things the prototype has not established: behaviour on real messy input, a measurable bar with a fallback, and a baseline for comparison."},
 {t:"Move to a more capable model to improve quality before piloting.", c:false, w:"Changes a variable before establishing whether the current one meets a bar that has not been defined."},
 {t:"Write the user documentation and training material.", c:false, w:"Necessary eventually, but premature while it is unknown whether the workflow performs on real queries."}],
 key: "Thirty assembled examples is a demonstration. Real sampled data, a stated bar, a fallback and a baseline is what turns it into something you can pilot."},
ex: {
 mins: 30,
 title: "Take one design from options to failure plan",
 obj: ["Practise generating alternatives before committing",
       "Write a criterion and a baseline before refining",
       "Design the failure path explicitly"],
 steps: [
 {s:"Take a use case you assessed in lesson 4.1 and ask for four genuinely different approaches with trade-offs — no recommendation.", why:"Withholding the request for a recommendation is what keeps the options from collapsing toward one.", res:"At least one approach you had not considered."},
 {s:"Write the criterion: what does good enough look like, measurably, and who judges it?", why:"Doing this before prototyping stops the criterion drifting to match whatever you built.", res:"A bar someone else could apply."},
 {s:"Record how the current process performs on that same measure.", why:"The baseline is what makes any later claim of improvement defensible.", res:"A number you can compare against."},
 {s:"Prototype the smallest version that answers your biggest uncertainty, and test it on 20 real, unselected items.", why:"Unselected is the operative word — choosing the examples is how prototypes flatter themselves.", res:"A realistic performance picture, usually worse than the curated one."},
 {s:"Write the four failure answers: how we would know, what it costs, how we recover, where unhandled cases go.", why:"This section is what makes a design reviewable by someone who was not involved.", res:"A design with a named fallback owner."}]},
src: [
 {t:"Anthropic Academy", u:"https://anthropic.skilljar.com"},
 {t:"Claude Help Center — artifacts", u:"https://support.claude.com"},
 {t:"Prompt engineering overview", u:"https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview"}]
};

LESSONS["4.4"] = {
mins: 25,
sum: "Getting a workflow into a real process: augment or redesign, where the control sits, and why adoption fails for reasons that have nothing to do with output quality.",
know: [
{h:"Augment or redesign",
 p:["Two integration postures, and choosing between them explicitly is what the exam looks for.",
    "<b>Augmenting</b> keeps the process shape and makes a step faster or better — Claude drafts what a person then edits. Low risk, quick to adopt, easy to reverse, and the right default when the process works but is slow.",
    "<b>Redesigning</b> changes the shape of the process because the constraint that produced the old shape no longer binds. Higher value and higher risk. It requires the process to be well understood first, which is exactly why lesson 4.1 insists on that.",
    "The pattern that fails is redesigning by accident: a tool introduced to augment quietly becomes the process, without anyone deciding that it should be or adjusting the controls that assumed a human was doing the work. Where the exam describes drift like this, the answer usually involves making the change explicit and revisiting the controls."]},
{h:"Where the human checkpoint sits",
 p:["Integration is largely a question of where people remain in the process, and three positions cover most designs.",
    "<b>Human-in-the-loop:</b> every output is reviewed before use. Appropriate for consequential, irreversible or external work. The constraint is capacity — as lesson 2.4 established, a reviewer who cannot realistically review is not a control.",
    "<b>Human-on-the-loop:</b> outputs flow, with sampling, monitoring and exception handling. Appropriate for high volume, lower consequence work with a detectable failure mode. Requires that failures actually surface.",
    "<b>Human-out-of-the-loop:</b> fully automated. Only defensible where consequence is genuinely low, errors are self-correcting or caught downstream, and no decision about a person is being made.",
    "The placement question is not \"do we have a human?\" but \"at which step, checking what, with what authority to stop it?\" A reviewer without the authority to reject is a spectator."]},
{h:"Adoption fails for human reasons",
 p:["A technically sound workflow that nobody uses has produced nothing, and the exam's scenarios about failed rollouts usually turn on something other than output quality.",
    "The recurring causes: it does not fit how people actually work, so using it costs more than it saves. Nobody was told what it is for or where its limits are, so they use it for the wrong things and lose trust when it fails there. Trust was broken early by a visible error with no explanation. People fear it is aimed at their jobs, and quiet non-adoption is the safest available response. Or there is no route to report problems, so problems accumulate as private workarounds.",
    "What helps: involve the people doing the work in the design; be explicit about limits from the start; make the first deployment one that removes something people dislike doing; provide a visible route to report failures and respond to it; be honest about the employment question rather than leaving it to rumour.",
    "The honesty point is not softness. A workflow whose real purpose is unclear to the people running it will be undermined, and the exam consistently prefers answers that address that directly."]},
{h:"Measure the integration, not the model",
 p:["Once a workflow is live, the measurements that matter are about the process rather than the output quality in isolation.",
    "<b>Throughput and cycle time</b> against the baseline you recorded. <b>Correction rate</b> — how often reviewers change something, and what they change, which is the best available signal of where the workflow is weak. <b>Escape rate</b> — errors that got past the control, the number that should drive redesign. <b>Adoption</b> — whether people use it, and if not, where they stopped. And <b>the review burden</b>, which determines whether the design is sustainable.",
    "Correction rate deserves particular attention because it is diagnostic as well as evaluative. If reviewers are always fixing the same thing, that is a prompt or configuration fix waiting to be made, which is where Domain 7's optimisation work comes from."]}
],
table: {cap:"Where the human sits",
 head:["Posture","Use when","Fails when"],
 rows:[
 ["In the loop — every output reviewed","Consequential, irreversible, external, about a person","Volume exceeds real review capacity"],
 ["On the loop — sampling and exceptions","High volume, lower consequence, detectable failures","Failures do not surface, or sampling is nominal"],
 ["Out of the loop — automated","Low consequence, errors caught downstream","Any decision affecting a person"]]},
keyc: "The question is not whether there is a human in the process but at which step, checking what, with what authority to stop it. A reviewer who cannot realistically review, or cannot reject, is not a control.",
traps: [
 {t:"Redesigning by accident",
  p:"A tool introduced to augment gradually becomes the process while the controls still assume a person is doing the work. The answer is to make the change explicit and revisit the controls, not to formalise the drift."},
 {t:"Explaining adoption failure as a quality problem",
  p:"When a scenario describes a workflow people avoid, look for fit, trust, communication or job-security causes before concluding that the outputs need to be better."},
 {t:"Measuring output quality instead of process outcomes",
  p:"Options that report model accuracy without cycle time, correction rate, escape rate or adoption are measuring the wrong thing. The integration is what was deployed."}
],
check: {
 q: "Three months after rollout, a Claude drafting workflow for internal reports is used by 2 of 14 people. Those two say the drafts are good. The other twelve continue writing reports manually and say they \"never got round to it.\" What is the most useful next step?",
 o: [
 {t:"Improve the prompts, since output quality is evidently not persuading people.", c:false, w:"The two users report the drafts are good. Quality is not the variable that differs between adopters and non-adopters."},
 {t:"Find out from the twelve what is actually stopping them — fit with how they work, unclear limits, trust, or concern about what the workflow is for — before changing anything.", c:true, w:"Adoption failure with satisfied users points at a human cause; the correct move is to establish which one rather than to guess."},
 {t:"Make use of the workflow mandatory and monitor compliance.", c:false, w:"Compels use without removing the obstacle, which reliably produces nominal compliance and undermines trust further."},
 {t:"Withdraw the workflow, since 14% adoption shows it does not fit the team.", c:false, w:"Abandons something two users find genuinely useful, without ever establishing why the others did not start."}],
 key: "When adopters are satisfied and non-adopters never started, the problem is not output quality. Ask the non-adopters before changing the product."},
ex: {
 mins: 25,
 title: "Design the integration, not just the task",
 obj: ["Choose augment or redesign deliberately",
       "Place the checkpoint with a named owner and real authority",
       "Set the measures before launch, not after"],
 steps: [
 {s:"Take your best use case and state explicitly whether you are augmenting a step or redesigning the process, and why.", why:"Naming the posture prevents the drift where augmentation quietly becomes the process.", res:"One sentence you would defend to a sponsor."},
 {s:"Draw the current process, then mark where the output enters and every downstream step it touches.", why:"Downstream effects are where integration surprises live — a changed format breaking a report someone else runs.", res:"At least one downstream consequence you had not considered."},
 {s:"Choose in-the-loop, on-the-loop or out-of-the-loop and justify it against consequence, reversibility and volume.", why:"Justifying against the variables is how you avoid defaulting to whatever is convenient.", res:"A defensible posture."},
 {s:"Name the reviewer, what they check, at which step, and confirm they can reject.", why:"A reviewer without authority to stop the process is a spectator, and the exam treats it as no control.", res:"A checkpoint with a name attached."},
 {s:"Write down your five measures — cycle time, correction rate, escape rate, adoption, review burden — and record the baseline for each.", why:"Measures defined after launch always flatter the launch.", res:"A measurement plan with a starting point."},
 {s:"Ask two people who will use it what would stop them using it. Take the answers seriously.", why:"This question surfaces the adoption blockers that no amount of quality improvement addresses.", res:"One or two concrete obstacles to fix before rollout."}]},
src: [
 {t:"Anthropic Academy — AI fluency", u:"https://anthropic.skilljar.com"},
 {t:"Claude Help Center", u:"https://support.claude.com"},
 {t:"Anthropic usage policy", u:"https://www.anthropic.com/legal/aup"}]
};

LESSONS["4.5"] = {
mins: 20,
sum: "Explaining value and limitations honestly to executives, teams, customers and risk functions — and why overselling costs more than it gains.",
know: [
{h:"Honesty is the strategy, not the concession",
 p:["The temptation in every stakeholder conversation is to lead with capability and mention limitations quietly. It is a bad trade. Overstated claims produce a first visible failure that costs far more credibility than the accurate version would ever have cost in enthusiasm.",
    "The exam consistently prefers answers that state limitations plainly, and treats hedging, disclaiming and vagueness as weaknesses. Note the distinction: a <i>disclaimer</i> attached to an unreliable output is evasion; a clear statement to stakeholders about what the technology does and does not do is a requirement.",
    "The useful framing for any audience is: here is what it does reliably, here is what it does not do, here is how we check, here is what we measure. Four sentences, and every audience gets a version of them."]},
{h:"Different stakeholders, different questions",
 p:["<b>Executives</b> want the business case: what changes, by how much, at what cost, with what risk, and how we will know. Lead with the outcome and the measure, not with the technology. Give a range rather than a point estimate, and name the assumption the range depends on.",
    "<b>The team doing the work</b> wants to know what it means for them: what it does, what it does not do, what stays their responsibility, and — whether or not they ask — what it means for their jobs. Being evasive here guarantees the rumour fills the gap.",
    "<b>Risk, legal and compliance</b> want to know what data goes where, what the controls are, who is accountable for outputs, what happens when it is wrong, and what is retained. Bring the answers rather than the enthusiasm; an unprepared conversation with a risk function costs months.",
    "<b>Customers</b> want to know whether they are affected, whether their data is involved, and whether a person is still accountable. Say so plainly, and disclose AI involvement where it is material to them or required."]},
{h:"Describing limitations without undermining the case",
 p:["Limitations described concretely are reassuring; described vaguely they are alarming. \"It can be unreliable\" invites the reader to imagine the worst. \"It can produce plausible but incorrect citations, which is why every citation is checked against the source before the note goes out\" describes a known failure and a control.",
    "So pair each limitation with its control. The four that cover most conversations:",
    "It can state incorrect things confidently — so specific claims are verified before use. It does not know what it was not told — so it cannot see systems it is not connected to and may not reflect this week's changes. It does not make the decisions — a named person remains accountable for anything consequential. And output varies — so the same input may not produce identical output, which matters for any process assuming reproducibility.",
    "Stating that last one proactively saves a difficult conversation later, because someone will eventually notice."]},
{h:"Claiming value you can defend",
 p:["Value claims should be defensible against the baseline you recorded in lesson 4.3, and stated in the units the audience cares about — hours, cycle time, cases handled, error rate — rather than in enthusiasm.",
    "Prefer a measured range from a real pilot to a projected point estimate. Name what the estimate assumes, and say what would falsify it.",
    "Be explicit about what has <i>not</i> been established. If you piloted on one team for six weeks, say that, rather than implying it generalises. And distinguish time saved from value created: two hours saved that turn into two hours of different work is real, but it is not the same as two hours of additional output, and a sceptical executive will make that distinction whether or not you do.",
    "Finally, report the failures alongside the wins. A rollout report that describes what went wrong and what was changed is more persuasive than one that does not, and it is the only kind that survives the first incident."]}
],
table: {cap:"What each audience needs first",
 head:["Audience","Leads with","Must include"],
 rows:[
 ["Executives","Outcome, cost, risk, measure","A range with its assumption, not a point estimate"],
 ["The team","What it does and does not do for them","What stays their responsibility, and the job question"],
 ["Risk and legal","Data flows, controls, accountability","What is retained, and what happens when it is wrong"],
 ["Customers","Whether and how they are affected","Whether a person remains accountable; disclosure where material"]]},
keyc: "Pair every limitation with its control. \"It can produce plausible but incorrect citations, which is why we check each one against the source\" reassures; \"it can be unreliable\" invites the listener to imagine something worse.",
traps: [
 {t:"Leading with capability and burying the limits",
  p:"Options that emphasise what it can do and defer limitations are wrong. The first visible failure costs more credibility than the honest version cost in enthusiasm."},
 {t:"Vague limitation language",
  p:"'It may occasionally be inaccurate' is weaker than naming the specific failure mode and the control that catches it. The exam prefers concrete over hedged."},
 {t:"Avoiding the job-security question",
  p:"When a scenario has a team anxious about roles, an option that focuses only on productivity benefits is weaker than one that addresses the question directly. Silence is filled by rumour."}
],
check: {
 q: "An executive asks for a one-page summary of a successful pilot to support wider rollout. The pilot ran with one team for six weeks, cut report drafting time by about 40%, and had two incidents where incorrect figures reached a draft and were caught in review. What should the summary do?",
 o: [
 {t:"Report the 40% time saving and the successful review process, keeping the incidents for a separate operational discussion.", c:false, w:"Omits the material information that makes the 40% interpretable — and the incidents will surface later at a much higher credibility cost."},
 {t:"Report the range of time saved with its assumptions, state that it covers one team over six weeks and has not been shown to generalise, and describe both incidents alongside the control that caught them and what changed as a result.", c:true, w:"Defensible value stated in the executive's units, honest scope limits, and limitations paired with controls — which is what makes the case survive scrutiny."},
 {t:"Report the time saving and add a general caveat that AI outputs may contain errors.", c:false, w:"A vague disclaimer in place of two specific, informative incidents that demonstrate the control working."},
 {t:"Recommend against rollout, since two incidents in six weeks indicates unacceptable risk.", c:false, w:"Misreads the evidence: both incidents were caught by the control, which is the control functioning as designed."}],
 key: "Two caught incidents are evidence the control works. Reported honestly with what changed, they strengthen the case; discovered later, they destroy it."},
ex: {
 mins: 20,
 title: "Write the same case for four audiences",
 obj: ["Practise leading with what each audience needs first",
       "Pair every limitation with a control",
       "State value you could defend against challenge"],
 steps: [
 {s:"Take a real or planned Claude workflow and write four sentences: what it does reliably, what it does not do, how we check, what we measure.", why:"These four are the spine of every version, and writing them once makes the rest fast.", res:"A four-sentence core."},
 {s:"Write the executive version: outcome, cost, risk, measure — with a range and its assumption.", why:"Ranges with named assumptions survive challenge; point estimates do not.", res:"Half a page, no technology detail."},
 {s:"Write the team version, including the job question directly.", why:"Practising the uncomfortable sentence is the point. It is much harder to improvise.", res:"A version you would actually be willing to send."},
 {s:"Write the risk and compliance version: data flows, controls, accountability, retention, failure handling.", why:"Bringing answers rather than enthusiasm is what shortens these conversations from months to weeks.", res:"A page of answers, plus a list of what you do not yet know."},
 {s:"Take each limitation you wrote and check it is paired with a control. Rewrite any that is not.", why:"An unpaired limitation reads as an unmanaged risk, whatever you intended.", res:"No bare limitations left."},
 {s:"Show the executive version to someone sceptical and ask them to attack the numbers.", why:"Finding the weak claim before the meeting is worth more than the polish.", res:"One claim you should soften or evidence better."}]},
src: [
 {t:"Anthropic Academy — AI fluency", u:"https://anthropic.skilljar.com"},
 {t:"Anthropic usage policy", u:"https://www.anthropic.com/legal/aup"},
 {t:"Claude Help Center — privacy and data handling", u:"https://support.claude.com"}]
};
