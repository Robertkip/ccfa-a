/* Domain 3 — Product and Model Selection (4 lessons) */

LESSONS["3.1"] = {
mins: 25,
sum: "Chat, Projects, artifacts and research mode solve four different problems. Selection items are fit decisions, and the giveaway is usually a word in the scenario about recurrence, iteration or breadth.",
know: [
{h:"Four surfaces, four jobs",
 p:["The Associate exam expects you to know what each product surface is <i>for</i>, not to recite feature lists. Each exists because a particular kind of work was awkward without it.",
    "<b>Chat</b> is the default: a single conversation for a one-off task. Fast, no setup, context lives only in that thread and only for that thread's lifetime.",
    "<b>Projects</b> exist because repeated work kept needing the same context re-supplied. A Project holds custom instructions that apply to every conversation inside it and a knowledge base of documents everything in it can draw on. The trigger word in a scenario is <i>recurring</i>, or <i>the team</i>.",
    "<b>Artifacts</b> exist because substantial content — a document, a spreadsheet-like table, code, a diagram, a small app — is painful to iterate on inside a chat transcript. An artifact is a persistent, editable object beside the conversation that you revise in place rather than regenerating. The trigger words are <i>iterate</i>, <i>refine</i>, <i>a document we will keep working on</i>.",
    "<b>Research mode</b> exists because some questions cannot be answered from a single retrieval. It works agentically across multiple sources — the web and, where connected, your own — gathering and synthesising with citations, taking longer in exchange for breadth and traceability. The trigger words are <i>current</i>, <i>across multiple sources</i>, <i>with citations</i>, <i>comprehensive</i>."]},
{h:"Connectors and where they fit",
 p:["Connectors link Claude to systems you already use — Google Drive, Gmail, Calendar and others — so it can draw on live material rather than what you paste in. They matter to Domain 3 because they change what a surface can do: research mode with a Drive connector searches your organisation's documents, not just the public web.",
    "They also carry the heaviest governance load on the product side. A connector's scope determines what Claude can see, and if a Project is shared with a team, everyone in it inherits access to what that Project can reach. Scope and membership are one decision, not two. The configuration mechanics belong to Domain 5 and the risk framing to Domain 6, but the selection consequence lives here: choosing a connected surface is choosing a data-access posture."]},
{h:"Reading a selection scenario",
 p:["Selection items describe a situation and ask what to use. The efficient method is to find the property of the work that forces the answer.",
    "<i>Does this recur, or is it one-off?</i> Recurring with shared context means a Project. One-off means chat.",
    "<i>Will the output be iterated?</i> A document, spec or piece of code you will revise means an artifact.",
    "<i>Does answering require gathering across sources?</i> Yes, especially with a need for citations or current information, means research mode.",
    "<i>Do several people need the same context?</i> A shared Project, with the access implications that follow.",
    "<i>Is the source material stable and reused?</i> Project knowledge rather than pasting it into each conversation.",
    "These combine. A team producing weekly competitive briefings wants a shared Project (recurring, shared), research mode inside it (gathering, citations) and artifacts for the briefing document (iterated)."]},
{h:"The two directions of error",
 p:["Wrong answers in this task statement come in two flavours, and the exam uses both.",
    "<b>Under-configuring:</b> re-pasting the same style guide into a fresh chat every week; copying an artifact-shaped document out of a transcript by hand each time; asking a plain chat for current information gathered across sources.",
    "<b>Over-configuring:</b> creating a Project for a task that happens once; standing up research mode for a question answered by one well-known fact; adding a connector with broad access when a single uploaded file would do. Over-configuration costs setup time and, with connectors, expands data exposure for no benefit.",
    "The heuristic that resolves most items: <b>use the lightest surface that removes the actual friction.</b> Name the friction first — repeated context, painful iteration, insufficient breadth — then pick the feature that removes it."]}
],
table: {cap:"Which surface, and what tells you",
 head:["Surface","Solves","Scenario signal"],
 rows:[
 ["Chat","A one-off task with context you can supply inline","Single question, no reuse"],
 ["Project","Re-supplying the same context and standards repeatedly","'Every week', 'the team', 'our style guide'"],
 ["Artifact","Iterating on a substantial piece of content","'Refine', 'revise', 'a document we keep working on'"],
 ["Research mode","Questions needing breadth, currency and citations","'Current', 'across sources', 'with citations'"],
 ["Connector","Working from live systems instead of pasted extracts","'Our Drive', 'our inbox', 'always up to date'"]]},
keyc: "Selection is a fit decision. Name the friction the scenario actually describes — repeated context, painful iteration, insufficient breadth — then choose the lightest surface that removes it.",
traps: [
 {t:"A Project for a one-off task",
  p:"Projects earn their setup cost through repetition and sharing. An option that stands one up for a single task is over-configuration, and the exam includes it precisely because it looks diligent."},
 {t:"Plain chat for questions needing current, sourced breadth",
  p:"The mirror trap. If the scenario says 'current', 'across multiple sources' or 'with citations', a plain chat asked to recall facts is the wrong surface — and it invites the Domain 2 fabrication problem."},
 {t:"Treating a shared Project's connector scope as a separate decision",
  p:"Adding a connector to a Project extends its reach to everyone with access to that Project. Options that treat sharing and scope independently are wrong."}
],
check: {
 q: "A four-person policy team produces a fortnightly regulatory briefing. It must reflect the current week's developments across several regulators, cite sources, follow a fixed house structure, and is revised through two rounds of comment before release. What configuration fits best?",
 o: [
 {t:"A fresh chat each fortnight with the house structure pasted in.", c:false, w:"Re-supplies the same context every cycle, gives the team no shared standard, and leaves the revision rounds happening in a transcript."},
 {t:"A shared Project holding the house structure as instructions and past briefings as knowledge; research mode for the fortnightly gathering; the briefing itself as an artifact through the comment rounds.", c:true, w:"Matches each friction to the surface that removes it: recurrence and shared standards to a Project, breadth and citations to research mode, iteration to an artifact."},
 {t:"Research mode alone, run fortnightly by each team member separately.", c:false, w:"Covers the gathering but not the shared standard or the revision cycle, and produces four divergent house styles."},
 {t:"A Project per briefing edition, archived after release.", c:false, w:"Discards the accumulated knowledge and standards that make the Project worth having, and multiplies setup for no gain."}],
 key: "Complex scenarios usually want a combination. Work friction by friction rather than looking for one feature that covers everything."},
ex: {
 mins: 30,
 title: "Map your recurring work to the right surface",
 obj: ["Identify friction you have been absorbing without noticing",
       "Practise the lightest-surface heuristic on real tasks",
       "Set up one Project properly and feel the difference"],
 steps: [
 {s:"List everything you have done with Claude more than twice in the last month.", why:"Repetition is the signal for a Project, and it is easy to miss when each instance feels like a one-off.", res:"Usually two or three genuinely recurring tasks."},
 {s:"For each, write the specific friction in one sentence — what you re-supply, reformat or copy out by hand every time.", why:"Naming the friction is what selects the surface. 'It's a bit slow' does not.", res:"A concrete friction per task."},
 {s:"Match each friction to the lightest surface that removes it, and note what you are deliberately not using.", why:"Articulating what you are not using is how you avoid over-configuring.", res:"A surface per task, with reasoning."},
 {s:"Set up one Project for the strongest candidate: instructions for the standards, knowledge for the stable source material.", why:"The instructions-versus-knowledge split is Domain 5's central distinction and it is much easier to remember once you have made the call yourself.", res:"A working Project you use next week."},
 {s:"Run one task that produces a document as an artifact and revise it twice in place.", why:"The difference between revising an artifact and regenerating in chat is the kind of thing that only lands by doing it.", res:"A clear sense of when artifacts are worth it."},
 {s:"If you have research mode available, run one genuinely comparative question through it and one through plain chat. Compare the citations.", why:"The gap in traceability is the reason research mode exists, and it connects directly to Domain 2.", res:"A rule for when you reach for each."}]},
src: [
 {t:"Claude Help Center — Projects, artifacts, research", u:"https://support.claude.com"},
 {t:"Anthropic Academy — Claude product courses", u:"https://anthropic.skilljar.com"},
 {t:"Anthropic news — product announcements", u:"https://www.anthropic.com/news"}]
};

LESSONS["3.2"] = {
mins: 20,
sum: "Haiku, Sonnet and Opus are a deliberate trade-off curve, not a quality ladder. Learn the shape of the family and why memorising specifications is the wrong preparation.",
know: [
{h:"A trade-off curve, not a ranking",
 p:["Anthropic publishes Claude in a family of tiers so that different workloads can sit at different points on the trade-off between speed, cost and capability. The names have been stable across generations even as the underlying models have changed.",
    "<b>Haiku</b> is the fast, low-cost tier. Built for high volume, low latency and well-defined work: classification, extraction, routing, simple transformation, anything running many times where each instance is straightforward.",
    "<b>Sonnet</b> is the balanced tier and the sensible default for most professional work. Strong reasoning at a cost and speed that suit interactive use and sustained day-to-day tasks.",
    "<b>Opus</b> is the most capable tier, for work where depth of reasoning is the binding constraint: complex multi-step analysis, difficult synthesis, subtle judgement, hard technical problems. It costs more and takes longer, and both of those are the point rather than a defect.",
    "Read this as a curve. The question is never \"which is best\" — it is \"where on this curve does my workload belong.\""]},
{h:"Do not memorise the numbers",
 p:["A specific trap for exam preparation: model specifications move. Context window sizes, pricing, latency and which named version sits in each tier change with each release, and any figure you memorise has a short shelf life.",
    "What is stable, and what the exam tests, is the <i>shape</i>: three tiers, ordered by capability, inversely ordered by speed and cost, with the balanced tier as the reasonable default. Scenario items describe a workload and ask which tier fits — they do not ask for token counts.",
    "This is also honest advice for the job. Before making a real decision about tier or cost, check Anthropic's current model documentation rather than relying on a study guide, including this one. Anything numeric in third-party material about model capabilities should be treated as potentially stale."]},
{h:"What actually changes between tiers",
 p:["Higher tiers help most where the work needs sustained reasoning across many dependent steps, subtle judgement between close alternatives, difficult synthesis across conflicting material, or careful handling of complex instructions with many interacting constraints.",
    "Higher tiers help least where the task is well-defined and mechanical, where the bottleneck is missing information rather than reasoning, and where volume and latency dominate the economics. Extracting a date from ten thousand invoices does not become more accurate on the most capable tier in any way that justifies the cost and time.",
    "The critical negative result, and the one the exam returns to across three domains: <b>escalating the tier does not fix an underspecified prompt.</b> If the input is missing, the criteria are undefined or the source material never arrived, every tier fails and the expensive one fails more expensively. Fix the brief first, then consider the tier."]},
{h:"Mixing tiers in one workflow",
 p:["Sophisticated workflows use different tiers at different stages, and recognising this is a mark of a strong answer.",
    "A support pipeline might classify and route on the fast tier, draft standard responses on the balanced tier, and reserve the most capable tier for the small number of escalated or ambiguous cases. Most of the volume runs cheap and fast; the hard fraction gets the depth it needs.",
    "The design question is which stage is actually hard. Usually it is one — the judgement step — and the rest is mechanical. Putting every stage on the top tier is the same error as putting every stage on the bottom one: it ignores that the stages differ.",
    "In the consumer and team products the tier available to you may be set by your plan and the interface rather than chosen per call, so in practice much of this reasoning shows up as \"is this task worth the slower, deeper mode\" rather than an explicit API choice. The judgement is the same."]}
],
table: {cap:"Where each tier belongs",
 head:["Tier","Optimised for","Typical work","Poor fit"],
 rows:[
 ["Haiku","Speed and cost at volume","Classification, extraction, routing, simple transforms","Nuanced judgement, complex multi-step reasoning"],
 ["Sonnet","Balance — the sensible default","Analysis, drafting, most professional day-to-day work","Very high volume where cost dominates; the very hardest reasoning"],
 ["Opus","Depth of reasoning","Complex synthesis, subtle judgement, hard technical problems","High-volume mechanical work; anything latency-sensitive"]]},
keyc: "The tiers are a trade-off curve between speed, cost and capability. Learn the shape and let the workload's binding constraint choose the point — and never memorise a specification that will change before your exam date.",
traps: [
 {t:"\"Always use the most capable model\"",
  p:"Wrong by construction. If capability were free the tiers would not exist. Any option phrased as a blanket rule about model choice is wrong regardless of which tier it names."},
 {t:"Escalating the tier to fix a bad prompt or missing input",
  p:"Appears in Domains 1, 3 and 7. When the scenario describes an underspecified request or absent source material, no tier is the answer."},
 {t:"Uniform tier across a mixed pipeline",
  p:"When a scenario describes stages of clearly different difficulty, the strong answer assigns tiers per stage rather than picking one for everything."}
],
check: {
 q: "A logistics company processes 40,000 delivery exception notes a day. Each must be classified into one of twelve categories and have the tracking reference extracted. Around 3% are ambiguous and go to a human queue, where a written recommendation would help the reviewer. What is the best model arrangement?",
 o: [
 {t:"The most capable tier throughout, for maximum classification accuracy.", c:false, w:"Applies depth to a mechanical task at enormous cost and latency, and ignores that only 3% needs judgement."},
 {t:"The fastest tier for classification and extraction on all 40,000, with a more capable tier generating recommendations for the ~1,200 ambiguous cases.", c:true, w:"Matches each stage to its binding constraint: volume and latency on the bulk mechanical work, reasoning depth on the small fraction that needs it."},
 {t:"The balanced tier throughout, as a reasonable compromise.", c:false, w:"Overpays on 97% of volume while still under-serving the ambiguous cases. A compromise is not the same as a fit."},
 {t:"The fastest tier throughout, with ambiguous cases sent to humans without any recommendation.", c:false, w:"Cheapest, but discards available value on exactly the cases where the human reviewer needs the most support."}],
 key: "When stages differ in difficulty, assign tiers per stage. Ask which step is actually hard — it is usually one of them, not all."},
ex: {
 mins: 20,
 title: "Place your own tasks on the trade-off curve",
 obj: ["Identify the binding constraint for each of your real workloads",
       "Test whether tier escalation actually changes your outputs",
       "Check current specifications rather than trusting memorised numbers"],
 steps: [
 {s:"List five things you use Claude for and, for each, name the one binding constraint: cost, speed or depth.", why:"Forcing a single binding constraint is what makes the choice tractable — two constraints usually means you have not decided.", res:"Five tasks with one constraint each."},
 {s:"Take a task where you habitually reach for the most capable tier and run it on the balanced tier.", why:"Most people find the difference is smaller than they assumed on ordinary professional work.", res:"A better sense of where depth actually earns its cost."},
 {s:"Take a genuinely hard reasoning task and run it on both. Note where the weaker output breaks down.", why:"Seeing the failure shape — usually a dropped constraint or a shallow synthesis — is what teaches you to recognise depth-bound work.", res:"A concrete example of a task that needs the top tier."},
 {s:"Take an underspecified prompt and run it on the top tier without improving it.", why:"Watching a capable model fail an empty brief is the single most exam-relevant thing in this lesson.", res:"An eloquent, still-generic answer."},
 {s:"Open Anthropic's current model documentation and check the present specifications against whatever you believed.", why:"Specifications move, and study material ages faster than the exam does.", res:"Corrected assumptions, and the habit of checking."}]},
src: [
 {t:"Anthropic — models overview", u:"https://docs.claude.com/en/docs/about-claude/models/overview"},
 {t:"Claude Help Center", u:"https://support.claude.com"},
 {t:"Anthropic news", u:"https://www.anthropic.com/news"}]
};

LESSONS["3.3"] = {
mins: 20,
sum: "Turning a workload description into a tier choice. Find the binding constraint, weigh the cost of an error against the cost of capability, and reject blanket rules.",
know: [
{h:"Find the binding constraint",
 p:["Every workload trades cost, speed and quality, but in any specific case one of them is binding — the one that, if you got it wrong, would sink the whole thing. The exam's selection scenarios are constructed so that exactly one is binding, and the details tell you which.",
    "<b>Cost binds</b> when volume is large and per-unit value is small. Millions of classifications, per-item margins in fractions of a penny.",
    "<b>Speed binds</b> when a person or a system is waiting. Interactive chat, a live agent's screen, anything inside a customer-facing request, anything with a queue behind it.",
    "<b>Quality binds</b> when an error is expensive or hard to reverse. Legal, financial, medical, safety, published, regulated, or anything feeding a consequential decision.",
    "Read the scenario for the numbers and the stakes. \"200,000 a day\" is a cost signal. \"While the customer is on the line\" is a speed signal. \"Goes into the annual report\" is a quality signal."]},
{h:"Weigh the error cost, not the unit cost",
 p:["The naive comparison is per-unit price. The right comparison is total cost including the cost of being wrong.",
    "A cheap tier that produces a 4% error rate on work where each error costs an hour of rework is not cheap. A top tier on a task where errors are caught free by the next step in the process is not obviously worth it.",
    "So the calculation is: unit cost × volume, plus error rate × cost per error, plus the cost of the review the error rate forces you to run. That third term is the one people forget — a lower tier often shifts cost into human review rather than removing it.",
    "This is also where Domain 2 and Domain 3 meet. If a tier's error rate obliges substantive review of every output, you have not saved money; you have moved it to a more expensive place."]},
{h:"Latency is a product decision",
 p:["Speed is not just a preference. Some experiences fail entirely if they are slow: a suggestion that arrives after the agent has finished typing is worthless, and a queue that cannot clear at arrival rate backs up without limit.",
    "Two useful moves when speed binds. Split the work: return something fast and improve it asynchronously — a quick classification now, a considered summary a moment later. And ask whether the deep step needs to be in the request path at all, or can run in a batch afterwards.",
    "Where speed genuinely binds and quality genuinely binds at the same time, the honest answer is usually that the process needs redesigning rather than that some tier resolves the tension. That framing — fix the process, not the model — is a strong answer shape across Domains 3, 4 and 7."]},
{h:"Reject blanket rules",
 p:["The single most reliable exam heuristic in this domain: any answer that states a universal rule about model choice is wrong. \"Always use the most capable model.\" \"Always use the cheapest that works.\" \"Standardise on one model for consistency.\"",
    "The last one is the subtlest, because standardisation sounds like good governance. It is reasonable to standardise the <i>decision rule</i> — \"volume mechanical work on the fast tier, judgement work on the balanced tier, these four named high-stakes cases on the top tier\" — and unreasonable to standardise the tier itself across unlike workloads.",
    "Correct answers in this task statement almost always name the binding constraint explicitly and then choose. If an option does not reference the properties of the workload, it is unlikely to be right."]}
],
table: {cap:"Reading the binding constraint",
 head:["Scenario signal","Binding constraint","Direction"],
 rows:[
 ["Very high volume, low value per item","Cost","Fastest tier that meets the accuracy bar"],
 ["A person or system is waiting","Speed","Fast tier in the path; depth asynchronously"],
 ["Published, regulated, or feeds a big decision","Quality","Capable tier plus human review"],
 ["Errors caught free downstream","Cost","Lower tier is genuinely cheaper"],
 ["Errors force substantive human review","Quality","A cheaper tier just moves cost to people"],
 ["Mixed stages of clearly different difficulty","Varies by stage","Different tiers per stage"]]},
keyc: "Compare total cost including the cost of being wrong and the review that error rate forces. A cheaper tier that obliges human review of every output has moved the cost, not removed it.",
traps: [
 {t:"Any universal rule about model choice",
  p:"'Always use the most capable', 'always use the cheapest', 'standardise on one model'. All wrong. Standardise the decision rule, not the tier."},
 {t:"Comparing unit price without error cost",
  p:"An option that selects purely on per-item price, in a scenario that describes expensive or irreversible errors, is wrong. The exam supplies the stakes precisely so you will weigh them."},
 {t:"Treating a capable model as a substitute for review",
  p:"Where quality binds, the answer is usually the capable tier <i>and</i> a human checkpoint, not the capable tier instead of one. Domain 2 does not switch off because Domain 3 chose well."}
],
check: {
 q: "An insurer wants to generate first-draft claim decision letters. Volume is about 900 a day, each letter is checked by a claims handler before sending, and an incorrect letter that reaches a customer creates a regulatory reporting obligation. Which reasoning best supports the model choice?",
 o: [
 {t:"Volume of 900 a day makes cost the binding constraint, so use the fastest tier.", c:false, w:"900 a day is modest, and the regulatory consequence of an error dominates any per-item saving."},
 {t:"Errors are regulatory and customer-facing, so quality binds — use a capable tier and keep the handler's review as the control, since a better model reduces the handler's correction load but does not remove the checkpoint.", c:true, w:"Names the binding constraint from the stakes, keeps the human control that the consequence requires, and treats model quality as reducing review burden rather than replacing review."},
 {t:"Since a handler reviews every letter, the cheapest tier is sufficient.", c:false, w:"Shifts cost onto handler correction time and raises the chance an error survives review — the review is a control, not a licence to lower quality arbitrarily."},
 {t:"Use the most capable tier and remove the handler review, since the letters will be reliable.", c:false, w:"Removes the control precisely where consequence is regulatory. No tier justifies this."}],
 key: "Where quality binds, the capable tier and the human checkpoint are complements. Model quality changes how much correcting the reviewer does, not whether the reviewer is needed."},
ex: {
 mins: 20,
 title: "Cost out one workload properly",
 obj: ["Include error cost and review cost, not just unit price",
       "Practise naming a single binding constraint",
       "Write a decision rule instead of picking a tier"],
 steps: [
 {s:"Pick one repeated workload with real volume. Write down volume, per-item value, and what happens when an item is wrong.", why:"These three numbers determine the answer, and most people have never written them down.", res:"Three concrete figures."},
 {s:"Name the single binding constraint. If you name two, decide which would sink the project.", why:"Forcing one is what makes the choice decidable rather than a discussion.", res:"One constraint, stated."},
 {s:"Estimate error rate at two tiers by sampling 20 real items through each.", why:"An estimate from your own data beats any published benchmark for your specific task.", res:"Two error rates, from your own material."},
 {s:"Calculate total cost at each tier: unit cost × volume, plus errors × cost per error, plus review time the error rate forces.", why:"The third term usually reverses the naive answer, which is the point of the exercise.", res:"A total that may surprise you."},
 {s:"Write the decision rule as a sentence someone else could apply — by stage or by case type, not a single global tier.", why:"A rule is what you can hand over and defend; a preference is not.", res:"One sentence you could put in a runbook."}]},
src: [
 {t:"Anthropic — models overview", u:"https://docs.claude.com/en/docs/about-claude/models/overview"},
 {t:"Claude Help Center", u:"https://support.claude.com"},
 {t:"Anthropic Academy", u:"https://anthropic.skilljar.com"}]
};

LESSONS["3.4"] = {
mins: 25,
sum: "Context is finite and shared by everything in the conversation. Learn what degradation looks like, what memory does and does not do, and how to structure long work so it does not decay.",
know: [
{h:"What the context window is",
 p:["Everything in play at once — your instructions, the documents you supplied, the whole conversation so far, and the response being generated — occupies a single finite budget called the context window. It is shared, so a large attachment leaves less room for conversation, and a very long conversation leaves less room for new material.",
    "Two consequences follow, and they are what the exam tests. Content can fall out of scope as a conversation grows, which is why an instruction given twenty exchanges ago may quietly stop being followed. And a document that is present is not necessarily being attended to equally throughout — buried content in a very large context gets less reliable treatment than content placed prominently.",
    "Exact window sizes differ by model and change between releases. Do not memorise a number; understand that the budget is finite, shared, and that behaviour degrades as it fills."]},
{h:"Recognising context degradation",
 p:["Degradation has a characteristic signature, and knowing it saves you from misdiagnosing it as a model failure — which is Domain 7's overlap with this task statement.",
    "The signs: an instruction from early in the session stops being applied; the model refers to something that was corrected several turns ago as though the correction never happened; details from an early attachment become vague or wrong; responses drift toward generic; the same question answered differently than it was an hour earlier.",
    "The distinguishing test is simple. Ask the same question in a <b>fresh conversation</b> with the relevant material supplied cleanly. If the answer is good, the problem was context, not capability — and no model change or prompt rewrite would have fixed it.",
    "This test is worth internalising because the wrong diagnosis is expensive: people escalate tiers and rewrite prompts for hours to fix something a new thread resolves in a minute."]},
{h:"Memory, Projects and persistence",
 p:["Several different things persist, and the exam expects you to keep them apart.",
    "<b>The conversation</b> persists as a transcript you can return to, but what is actively in context is bounded by the window.",
    "<b>Project instructions</b> persist across every conversation in that Project, by design. They are the reliable way to make something apply every time.",
    "<b>Project knowledge</b> persists as material available to draw on across conversations in the Project.",
    "<b>Memory features</b>, where available, let Claude carry forward context between conversations. Treat what they retain as a convenience rather than a guarantee: if something must apply every time, put it in instructions rather than relying on it having been remembered. Memory features also raise a Domain 6 question — what is being retained, for how long, and whether that is appropriate for the data involved.",
    "The exam-relevant line: <i>persistence is not the same as reliability</i>. Anything that must be applied without fail belongs in configuration, not in the hope that it was carried over."]},
{h:"Structuring long work",
 p:["<b>Start fresh at natural boundaries.</b> A new phase of work deserves a new conversation with a clean, consolidated statement of where things stand. This is not a failure — it is how long work is meant to be done.",
    "<b>Front-load what matters.</b> Put critical instructions and key material where they are prominent rather than buried in the middle of a long attachment.",
    "<b>Restate constraints periodically.</b> One sentence re-anchoring the goal and the hard constraints costs little and prevents drift.",
    "<b>Carry a summary, not the transcript.</b> When moving to a new conversation, bring a compact statement of decisions and current state rather than pasting the history back in — which would simply refill the window with the same problem.",
    "<b>Supply what is needed, not everything available.</b> Attaching ten documents when the task concerns two crowds the window and dilutes attention across all of them.",
    "<b>Use a Project for what recurs.</b> Standing instructions and curated knowledge give every fresh conversation the right starting context without you rebuilding it, which is exactly why Domain 5 exists."]}
],
table: {cap:"Symptom, cause, response",
 head:["What you observe","Likely cause","Response"],
 rows:[
 ["An early instruction stops being applied","Context pressure in a long session","Restate it; move it to Project instructions if it recurs"],
 ["A corrected error reappears","The correction has fallen out of scope","Fresh conversation with the corrected state summarised"],
 ["Detail from an attachment goes vague","Large or crowded context","Supply only the relevant document or extract"],
 ["Responses drift generic late in a session","Accumulated context","Start fresh with a consolidated brief"],
 ["Same question, different answer than earlier","Context degradation, not capability","Test in a clean thread before changing anything else"],
 ["A standard is followed inconsistently across sessions","Relying on memory instead of configuration","Put it in Project instructions"]]},
keyc: "Before you rewrite a prompt or change model because output quality has slipped mid-session, ask the same question in a fresh conversation with clean inputs. If it answers well, the problem was context — and nothing else you were about to do would have helped.",
traps: [
 {t:"Diagnosing context degradation as a model or prompt problem",
  p:"The scenario signal is that quality was fine earlier in the same long session. That timing detail is placed deliberately. The answer is a fresh conversation, not a better model."},
 {t:"Relying on memory for something that must always apply",
  p:"Options that depend on Claude remembering a standard from a previous conversation are weaker than options that put it in Project instructions. Persistence is not reliability."},
 {t:"Attaching everything available",
  p:"An option that uploads the entire folder 'so nothing is missing' crowds the window and dilutes attention. The stronger answer supplies what the task requires."}
],
check: {
 q: "Two hours into a long working session on a technical specification, a user notices that a formatting convention agreed at the start is no longer being applied and that a correction made an hour ago has reappeared as an error. What should they do first?",
 o: [
 {t:"Switch to a more capable model and continue in the same conversation.", c:false, w:"Carries the degraded context forward. Capability was never the constraint."},
 {t:"Start a fresh conversation with a consolidated summary of the current state, the agreed conventions and the corrections already made — and put the conventions into Project instructions if this work recurs.", c:true, w:"Applies the clean-thread test and its remedy, and moves the must-always-apply items into configuration where they will hold."},
 {t:"Repeat the formatting convention more forcefully in the current thread.", c:false, w:"May work briefly, but treats a structural problem as a phrasing one and will recur as the session grows further."},
 {t:"Paste the entire conversation history into a new conversation to preserve context.", c:false, w:"Recreates exactly the condition that caused the problem. Carry a summary, not the transcript."}],
 key: "The tell is that quality was fine earlier in the same session. That points at context, and the remedy is a clean thread with a summary — never the transcript."},
ex: {
 mins: 25,
 title: "Observe degradation and practise the clean-thread test",
 obj: ["Recognise the signature of context degradation in your own work",
       "Practise carrying a summary rather than a transcript",
       "Move must-always-apply rules into configuration"],
 steps: [
 {s:"Find a long conversation where quality slipped, or run one deliberately: a substantial task over many exchanges with a distinctive convention set at the start.", why:"You need to have watched it happen once to recognise it under time pressure later.", res:"A session showing at least one of the degradation signs."},
 {s:"Note the exact point where the early instruction stopped being applied.", why:"Locating it makes the effect concrete rather than a vague sense that things got worse.", res:"A specific turn where drift began."},
 {s:"Run the clean-thread test: same question, fresh conversation, relevant material supplied cleanly.", why:"This is the diagnostic that separates context problems from capability problems, and it is fast.", res:"A good answer, confirming the diagnosis."},
 {s:"Write a consolidated summary of state and decisions — no transcript — and continue in the new thread from that.", why:"Writing the summary is a skill in itself, and pasting history back in is the mistake it prevents.", res:"A working continuation without the drift."},
 {s:"Take the conventions that had to be restated and put them into Project instructions.", why:"Anything you found yourself repeating is a configuration item, not a prompt item.", res:"Instructions that apply automatically next time."},
 {s:"Check what memory features are enabled for you and what they retain.", why:"You cannot reason about persistence, or about the Domain 6 implications, without knowing what is switched on.", res:"An informed view of what carries over and what does not."}]},
src: [
 {t:"Claude Help Center — context, memory and Projects", u:"https://support.claude.com"},
 {t:"Anthropic — models overview", u:"https://docs.claude.com/en/docs/about-claude/models/overview"},
 {t:"Long context prompting tips", u:"https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/long-context-tips"}]
};
