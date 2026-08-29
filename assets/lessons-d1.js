/* Domain 1 — Prompting and Task Execution (4 lessons) */

LESSONS["1.1"] = {
mins: 25,
sum: "A prompt is a brief, not a wish. Learn the four things every business prompt has to carry, and why a stronger model never rescues a prompt that is missing them.",
know: [
{h:"The prompt is a brief",
 p:["The single most common failure in workplace use of Claude is not a model limitation. It is a person asking for something they have not described. \"Summarise this,\" \"make this better,\" \"analyse these numbers\" — each of these is a wish rather than an instruction, and each will produce a competent, generic, unusable answer.",
    "Treat a prompt the way you would treat a brief handed to a capable new colleague who has never met your stakeholders, does not know what the document is for, and cannot ask you a follow-up question before they start. That colleague would produce excellent work given the right brief and mediocre work without one. So will Claude.",
    "The exam frames this domain almost entirely in business scenarios — a contract, a support backlog, a board paper, a customer email. The right answer is nearly always the one that supplies missing information rather than the one that applies more pressure."]},
{h:"The four elements",
 p:["A prompt that works first time carries four things. You can remember them as <b>role, task, context, format</b>, but what matters is the questions they answer, not the acronym.",
    "<b>Role and audience.</b> Who is this for, and what do they already know? A risk summary for the board and a risk summary for the engineering team share no sentences. Saying \"for a non-technical audit committee\" changes vocabulary, length and what gets omitted.",
    "<b>Task and purpose.</b> What decision does this output support? \"Summarise the contract\" and \"summarise the contract so I can decide whether to escalate the indemnity clause to legal\" produce completely different documents. Purpose is the element people leave out most often, and the one that changes the output most.",
    "<b>Context and source material.</b> Constraints, the material to work from, what has already been tried, what is out of scope. Claude cannot see your CRM, your prior email thread, or the meeting where this was decided unless you put them in the prompt.",
    "<b>Format and constraints.</b> Length, structure, tone, and what the output must and must not contain. \"Under 300 words, as five bullets, each naming the clause and the risk, no recommendations\" is a specification. \"Keep it short\" is not."]},
{h:"Be explicit rather than implicit",
 p:["Claude follows instructions closely, which means unstated preferences go unmet. If you would be annoyed to receive an output that violates some expectation, that expectation belongs in the prompt. This includes negative constraints — \"do not include pricing,\" \"do not suggest actions, only describe findings\" — which people frequently hold in their head and then treat as a model failure.",
    "Explicitness also covers uncertainty. Adding \"if the document does not state something, say so rather than inferring it\" is one of the cheapest quality improvements available, and it connects directly to Domain 2.",
    "Examples are the strongest form of explicitness. If you have one output that was right, paste it and say \"match this structure and level of detail.\" A single concrete example usually beats three sentences of description."]},
{h:"Technical tasks follow the same rules",
 p:["The blueprint says \"business and technical tasks\" because the Associate exam expects you to prompt for both, but the discipline does not change. A technical prompt still needs an audience (who reads this code, at what level), a purpose (a prototype, a production change, an explanation for a review), context (the language, framework, versions, and the surrounding code) and a format (a diff, a full file, an explanation first).",
    "The one thing technical prompts add is that constraints are usually harder. \"Must not add a dependency,\" \"must work on the version we actually run,\" \"must keep the existing function signature\" are the kind of specifics that separate a usable answer from an elegant one you cannot use."]},
{h:"A worked rewrite",
 p:["<span class=\"exl\">Weak</span> \"Here are our Q3 support tickets. What are the main issues?\"",
    "<span class=\"exl\">Strong</span> \"You are helping me prepare a 10-minute update for our Head of Product, who is not close to the support queue. Attached are 1,200 Q3 support tickets. Identify the five issue themes that account for the most tickets. For each, give the theme name, an estimated share of total volume, one representative quote, and whether it looks like a product defect or a documentation gap. Under 500 words, as a numbered list. If a theme is ambiguous, say so rather than forcing it into a category.\"",
    "Nothing in the strong version is clever. It is the weak version with the audience, the purpose, the constraints and the format written down — plus one instruction about uncertainty."]}
],
table: {cap:"What is actually missing when an output disappoints",
 head:["The output is…","What is usually missing","The fix that is not the fix"],
 rows:[
 ["Generic and unactionable","Purpose — the decision it must support","Adding \"be more detailed\""],
 ["Wrong register or vocabulary","Audience","Asking for a \"more professional\" tone"],
 ["Right content, wrong shape","Format and length constraints","Reformatting it yourself every time"],
 ["Confidently wrong on specifics","Source material you never supplied","Switching to a more capable model"],
 ["Missing something obvious to you","A constraint you held in your head","Assuming Claude should have known"]]},
keyc: "A capable model cannot supply information you did not give it. When an output is generic, the prompt was <b>underspecified</b>, not underpowered — and escalating the model tier will produce a more eloquent version of the same generic answer.",
traps: [
 {t:"\"Switch to Opus\" as the answer to a vague output",
  p:"Model selection is Domain 3, and the exam deliberately places a model-escalation option in Domain 1 prompting items. If the scenario describes an output that is accurate but generic, the deficiency is in the brief. Escalating the tier costs more and fixes nothing."},
 {t:"Adding adjectives instead of information",
  p:"\"Be more detailed,\" \"make it better,\" \"be more professional\" are all distractors. They describe a dissatisfaction, not a requirement. The correct option names a specific missing element — the audience, the decision, the length, the source."},
 {t:"Treating a longer prompt as automatically a better one",
  p:"The exam also tests the reverse. An option that piles on irrelevant background, or imposes a rigid template on a task that needs range, is wrong. Specificity means relevant detail, not volume."}
],
check: {
 q: "A finance manager asks Claude to \"review this budget spreadsheet and flag anything concerning.\" The response is a list of generic budgeting cautions rather than observations about the actual numbers. What is the most effective correction?",
 o: [
 {t:"Repeat the request adding \"be specific and thorough.\"", c:false, w:"Adjectives describe the dissatisfaction without supplying what was missing."},
 {t:"State what counts as concerning — variance thresholds, which cost centres matter, and the decision the review supports — and confirm the data was actually provided in a readable form.", c:true, w:"Names the missing criteria and the purpose, and checks the source material, which is the other common cause of generic output."},
 {t:"Move the task to a more capable model and re-send the same prompt.", c:false, w:"The prompt is underspecified; a stronger model produces a more articulate generic answer."},
 {t:"Ask for the review one row at a time.", c:false, w:"Decomposition without criteria just produces generic cautions repeatedly, and destroys the cross-row comparison that makes variance meaningful."}],
 key: "\"Concerning\" is a judgement that only you can define. When a prompt turns on a subjective threshold, the threshold has to be in the prompt."},
ex: {
 mins: 25,
 title: "Rewrite three of your own weak prompts",
 obj: ["Recognise underspecification in your own writing rather than in exam scenarios",
       "Practise naming audience, purpose, context and format explicitly",
       "See directly that specificity, not model choice, moves output quality"],
 steps: [
 {s:"Open your Claude history and find three prompts where you were not happy with the first response.", why:"Real examples beat invented ones — you already know what you wanted, so you can judge the gap honestly.", res:"Three prompts, ideally on different kinds of task."},
 {s:"For each, write down which of the four elements was missing. Do not rewrite anything yet.", why:"Forcing a diagnosis before a fix is the exact habit Domain 1 and Domain 7 both test.", res:"Most will be missing purpose, format, or both."},
 {s:"Rewrite one prompt supplying only the missing elements. Change nothing else — no new adjectives.", why:"Isolating the variable shows you how much of the improvement comes from information alone.", res:"A noticeably more usable output from the same model."},
 {s:"Re-run the original weak prompt on a more capable model tier for comparison.", why:"This is the exam's favourite distractor. Seeing it fail once makes the trap permanent.", res:"A better-written answer that is still generic, because the brief is still empty."},
 {s:"Save the strongest rewrite somewhere reusable — a note, or Project instructions if the task recurs.", why:"Turning a working prompt into a default is Domain 7 optimisation, and it starts here.", res:"One reusable prompt template you will actually use again."}]},
src: [
 {t:"Prompt engineering overview — Anthropic docs", u:"https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview"},
 {t:"Be clear, direct, and detailed", u:"https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/be-clear-and-direct"},
 {t:"Use examples (multishot prompting)", u:"https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/multishot-prompting"}]
};

LESSONS["1.2"] = {
mins: 25,
sum: "When to break a request into steps and when not to. Decomposition buys you checkpoints, and checkpoints are only worth their cost when a later step depends on an earlier one being right.",
know: [
{h:"What decomposition actually buys you",
 p:["Task decomposition means splitting one large request into a sequence of smaller ones, each of which you can inspect before the next begins. What you are buying is <b>checkpoints</b>. A single monolithic prompt gives you exactly one place to catch an error: the end, after everything downstream has already been built on it.",
    "This matters because errors compound. If Claude misclassifies your support themes in step one and you asked for themes and a remediation plan in one prompt, you receive a fluent, well-structured plan for the wrong problems. Split the request and you catch the misclassification while it is still cheap.",
    "The corollary, which the exam tests just as often: if there is nothing to catch, decomposition is pure overhead. Splitting \"translate this paragraph into French\" into five steps adds work and removes context."]},
{h:"The dependency test",
 p:["The question to ask is not \"is this task big?\" but <b>\"does a later part of this task depend on an earlier part being correct?\"</b>",
    "\"Analyse three years of tickets, identify the top five themes, and draft a remediation plan for each\" has two dependencies: the plan depends on the themes, and the themes depend on the analysis. Three stages, two places where a silent error would propagate. Decompose it.",
    "\"List the capital cities of the G7 countries\" has no dependency. It is retrieval with no intermediate judgement. Sending it as one prompt is correct.",
    "Size is a weak proxy. A 40-page document summarised into one summary is a large task with no internal dependency — one prompt, well specified, is right. A three-sentence request that requires a judgement and then an action based on that judgement is a small task that benefits from splitting."]},
{h:"Where to put the seams",
 p:["Cut at the points where a human would want to look. In practice that means cutting between stages that produce a different <i>kind</i> of thing:",
    "<b>Extract, then analyse.</b> First pull the facts out of the source; check them; then reason about them. This is the single most valuable seam, because it separates \"did we read it right\" from \"did we think about it right\" — two different failures with two different fixes.",
    "<b>Diverge, then converge.</b> Generate options first, evaluate second. Mixing them causes premature narrowing, which is covered properly in lesson 1.4.",
    "<b>Draft, then critique.</b> Ask for the output, then ask for a review of the output against stated criteria. Note the limit here: Claude reviewing its own work catches structural and completeness problems well, but it is not verification of factual accuracy. That distinction belongs to Domain 2 and the exam enforces it strictly.",
    "<b>Decide, then act.</b> Any step with a consequence — sending, publishing, committing, escalating — deserves its own seam with a human at it. That is Domain 4 and 6 territory, but the seam is placed here."]},
{h:"Keeping context across steps",
 p:["Decomposition has a real cost: each step loses the shared understanding of the whole. Three techniques manage this.",
    "Carry the output forward explicitly. Paste or reference the confirmed result of step one into step two rather than assuming it is remembered. In a long session it may have been compacted or dropped.",
    "Restate the goal in each step. One sentence — \"we are building a remediation plan for the top five Q3 support themes\" — keeps a later step from optimising locally in a way that undermines the whole.",
    "Use a Project when the sequence recurs. Standing instructions and shared knowledge give every step the same context without you re-pasting it. That is Domain 5.",
    "There is also a genuine cost in tokens and time: each step re-sends context, so a five-step chain costs more than one prompt. Decompose because you need the checkpoints, not because splitting feels more rigorous."]}
],
table: {cap:"Decompose or send as one prompt",
 head:["Request","Decompose?","Why"],
 rows:[
 ["Translate this paragraph","No","One bounded transformation, nothing to check midway"],
 ["Summarise this 40-page contract","No","Large, but a single output with no internal dependency — and splitting destroys cross-references"],
 ["Find the themes, then plan remediation for each","Yes","The plan is built on the themes; a wrong theme yields a fluent plan for the wrong problem"],
 ["Draft an email announcing a policy change","No, usually","One artefact — unless the policy itself must first be interpreted from source documents"],
 ["Research a market, then recommend an entry strategy","Yes","Recommendation depends on findings you should verify before reasoning on them"],
 ["Reformat this table as CSV","No","Mechanical, verifiable at a glance"]]},
keyc: "Decompose when a later step depends on an earlier step being <b>right</b> — not when the task merely looks big. The value of a seam is the checkpoint it creates, so a seam with nothing to check is only cost.",
traps: [
 {t:"Decomposing a task that has no dependencies",
  p:"An option that splits a simple transformation into many small prompts is wrong, and the exam includes at least one. Watch particularly for options that split a document into independent chunks when the document's meaning depends on cross-references — contracts and policies are the usual examples."},
 {t:"Treating self-review as verification",
  p:"\"Draft, then ask Claude to check it\" is a legitimate seam for completeness and structure. It is not fact-checking. If an option presents Claude reviewing its own output as sufficient validation of factual accuracy, it is wrong — see Domain 2."},
 {t:"Decomposing without carrying context forward",
  p:"An option that splits a task but starts each step fresh with no reference to the confirmed prior result will produce a disjointed chain. The correct decomposition names what carries between steps."}
],
check: {
 q: "An analyst must produce a competitive briefing: gather public information on four competitors, identify where each overlaps with your product, and recommend which two to prioritise for a counter-positioning campaign. Which structure is most appropriate?",
 o: [
 {t:"One prompt containing all three requirements, so Claude has full context throughout.", c:false, w:"Puts the only checkpoint at the end, after a recommendation has already been built on unverified findings."},
 {t:"Three steps — gather and verify the competitor information, then map overlaps against the confirmed set, then recommend priorities — carrying each confirmed result into the next.", c:true, w:"Each stage depends on the previous being right, and the factual stage is the one most worth checking before reasoning is built on it."},
 {t:"Twelve prompts, one per competitor per stage.", c:false, w:"Over-fragmented: the overlap analysis and the prioritisation both require comparing competitors, which per-competitor prompts prevent."},
 {t:"One prompt for the research, then ask Claude to review its own research for accuracy before continuing.", c:false, w:"Self-review is not verification of external facts. The check at this seam has to be a human against sources."}],
 key: "Cut between stages that produce different kinds of thing, and put the human check at the seam where facts turn into reasoning."},
ex: {
 mins: 30,
 title: "Decompose a real multi-stage task",
 obj: ["Apply the dependency test to a task you actually own",
       "Place seams where a human would want to look",
       "Experience error propagation once, deliberately, so you recognise it later"],
 steps: [
 {s:"Pick a real task with at least three stages — something like reviewing a set of documents and producing a recommendation.", why:"Invented tasks have no real dependencies, so the exercise teaches nothing.", res:"A task you would otherwise have sent as one prompt."},
 {s:"Send it as a single prompt first. Keep the output.", why:"You need the baseline to compare against, and to see how plausible a monolithic answer looks.", res:"A fluent output whose intermediate reasoning you cannot inspect."},
 {s:"Write out the stages and mark every dependency with an arrow. Put a seam on each arrow.", why:"This is the dependency test made visible, and it usually reveals one stage you had not noticed was a judgement.", res:"Typically two or three seams, not five."},
 {s:"Run the decomposed version, checking the output of each stage before starting the next.", why:"The checking is the point. Skipping it means you paid the cost of decomposition and bought nothing.", res:"At least one correction you would have missed in the monolithic run."},
 {s:"Compare the two final outputs and note specifically what the monolithic version got wrong and how invisible it was.", why:"The lesson that sticks is that the wrong answer looked just as confident as the right one.", res:"A concrete example of error propagation from your own work."}]},
src: [
 {t:"Chain complex prompts — Anthropic docs", u:"https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/chain-prompts"},
 {t:"Let Claude think (chain of thought)", u:"https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/chain-of-thought"},
 {t:"Prompt engineering overview", u:"https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview"}]
};

LESSONS["1.3"] = {
mins: 20,
sum: "Iteration is diagnosis followed by a targeted change. Learn to name the gap before you rewrite, change one thing at a time, and recognise when the problem is the task rather than the prompt.",
know: [
{h:"Diagnose, then change one thing",
 p:["Iterating well is the difference between two attempts and eleven. The discipline is short: <b>name the gap, make one targeted change, compare.</b>",
    "Naming the gap means saying what is wrong in terms of a missing or incorrect element, not in terms of your feeling about it. \"Too long\" is a feeling. \"Longer than the 300 words I need, because I never said 300 words\" is a gap. \"It missed the termination clause\" is a gap. \"It doesn't feel right\" is not yet anything you can act on — keep looking until you can name it.",
    "Changing one thing matters because if you rewrite the whole prompt and the output improves, you have learned nothing transferable. You have a better output and no idea why. Over a week of work that costs far more time than the discipline does."]},
{h:"The order to try things",
 p:["When you do not know what is wrong, work in this order — cheapest and most likely first. It is the same order as Domain 7 troubleshooting, which is why those two domains reward the same instinct.",
    "<b>1. The input.</b> Did the source material actually arrive intact and readable? A truncated paste, an image-only PDF, or a spreadsheet whose structure was lost accounts for a surprising share of \"the model is wrong\" reports.",
    "<b>2. The specification.</b> Is the missing thing something you never said? Audience, purpose, length, format, exclusions, what to do when uncertain.",
    "<b>3. The examples.</b> Would showing rather than telling fix it? Faster than a paragraph of description when the issue is style, structure or level of detail.",
    "<b>4. The structure.</b> Does this need decomposing, or is a step being skipped that should be explicit?",
    "<b>5. The task fit.</b> Only now consider whether the model, the feature or the whole approach is wrong. Escalating first is the classic error."]},
{h:"Techniques that reliably help",
 p:["<b>Give an example of right.</b> If a previous output was correct, paste it: \"match this structure and depth.\"",
    "<b>Ask what was ambiguous.</b> \"Before you answer, tell me what is unclear or missing from my request.\" Turning the ambiguity back at you is often faster than guessing what you left out.",
    "<b>Ask for reasoning before conclusions.</b> On analytical tasks, requesting the working before the answer improves the answer and, just as usefully, lets you see where reasoning went wrong.",
    "<b>Constrain what you do not want.</b> Negative constraints are underused: \"no recommendations,\" \"do not restate the question,\" \"do not include anything not present in the source.\"",
    "<b>Restart rather than patch.</b> After several rounds of correction a conversation accumulates contradictory instructions and stale context. A clean prompt incorporating everything you have learned often beats a tenth correction on a muddled thread."]},
{h:"Knowing when to stop iterating",
 p:["Iteration has a stopping condition, and the exam tests whether you know it. Stop and reconsider the approach when:",
    "The same class of error survives three targeted, different corrections. That is a signal about the task, not the wording.",
    "Every fix trades against another — tightening accuracy loses the tone, fixing the tone loses the detail. Usually means the request is really two requests.",
    "The output requires information Claude does not have. No prompt retrieves data that was never supplied. The fix is to supply it, connect a source, or accept the task is out of scope.",
    "You are spending longer iterating than the task would take to do yourself, and it is a one-off. Recognising this is judgement the exam does reward — not everything should be delegated."]}
],
table: {cap:"Symptom to first move",
 head:["Symptom","Most likely cause","First move"],
 rows:[
 ["Generic, could apply to anything","No stated purpose or audience","Name the decision it supports and who reads it"],
 ["Right idea, wrong shape","No format constraint","Specify length, structure, sections"],
 ["Invented specifics","Source not supplied, or not readable","Check the input arrived; require source-grounded claims"],
 ["Ignores part of the request","Buried in a long prompt","Move it to the top, or split the request"],
 ["Style keeps missing","Description instead of demonstration","Give an example of a correct output"],
 ["Drifts across a long session","Context degraded or crowded","Start a clean thread with a consolidated prompt"],
 ["Wrong after three good fixes","Task fit, not prompt","Reconsider the approach, feature or model"]]},
keyc: "Change one variable per iteration. A rewrite that improves the output teaches you nothing you can reuse; a targeted change that improves it teaches you a rule you will apply for years.",
traps: [
 {t:"Escalating the model as the first iteration",
  p:"It appears in nearly every iteration item. Model tier is step five in the order, not step one, and it never fixes an underspecified prompt."},
 {t:"Rewriting everything at once",
  p:"An option that says \"rewrite the prompt from scratch with more detail\" may produce a better output but is the wrong answer when a targeted correction is available, because the scenario usually names the specific gap."},
 {t:"Patching a conversation that should be restarted",
  p:"The reverse trap. When the scenario describes many rounds of contradictory correction, the correct answer is a clean start with a consolidated prompt — continuing to patch compounds the confusion."}
],
check: {
 q: "A user has asked Claude four times to fix the tone of a customer apology email. Each time the tone improves and a previously correct factual detail about the refund process changes or disappears. What should they do next?",
 o: [
 {t:"Ask a fifth time, stating the tone requirement more forcefully.", c:false, w:"The fourth attempt failed the same way as the third; more force on the same axis will not change the pattern."},
 {t:"Start a clean prompt that states the fixed facts as non-negotiable constraints and the tone requirement separately, rather than continuing to patch the thread.", c:true, w:"Recognises that the thread has accumulated contradictory instructions and that the facts need pinning as constraints rather than being re-derived each round."},
 {t:"Switch to a more capable model and continue the same conversation.", c:false, w:"Carries the muddled context forward. The problem is the accumulated thread, not the model's capability."},
 {t:"Accept the latest version and correct the refund details by hand each time.", c:false, w:"Bakes in a recurring manual fix for a problem that a single constraint would solve, and risks the correction being forgotten."}],
 key: "When corrections start trading against each other, the fix is structural — pin the invariants as constraints and restart — not another round on the same thread."},
ex: {
 mins: 20,
 title: "Run a single-variable iteration log",
 obj: ["Practise naming a gap before changing anything",
       "Prove to yourself that one-variable changes teach transferable rules",
       "Recognise your own stopping condition"],
 steps: [
 {s:"Take one prompt that produced a disappointing output. Write the gap in one sentence, in terms of a missing element.", why:"If you cannot write the sentence, you are not ready to iterate — you are ready to look harder.", res:"A sentence like 'no length constraint, so it ran to 900 words.'"},
 {s:"Make exactly one change addressing that gap. Log the change and the result in two lines.", why:"The log is what converts a fix into a rule you keep.", res:"Two lines: what you changed, what happened."},
 {s:"Repeat for up to three iterations, one variable each, following the order: input, specification, examples, structure.", why:"The order front-loads the cheap and likely causes, which is exactly what Domain 7 tests.", res:"Usually resolved by iteration two or three."},
 {s:"If the same class of error survives three targeted changes, stop and write down why the task may not fit this approach.", why:"Practising the stopping condition matters as much as practising the fixes.", res:"Either a resolved prompt or an explicit reason the approach is wrong."},
 {s:"Review your log and extract one rule you will apply by default from now on.", why:"This is the bridge into Domain 7 optimisation: a fix that becomes a default.", res:"One reusable rule, in your own words."}]},
src: [
 {t:"Prompt engineering overview — Anthropic docs", u:"https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview"},
 {t:"Be clear, direct, and detailed", u:"https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/be-clear-and-direct"},
 {t:"Claude Help Center", u:"https://support.claude.com"}]
};

LESSONS["1.4"] = {
mins: 25,
sum: "Four task types — analysis, research, drafting, brainstorming — each want a different prompt shape. Applying the wrong shape is the failure this task statement tests.",
know: [
{h:"Why task type changes the prompt shape",
 p:["The four elements from lesson 1.1 apply everywhere, but the emphasis shifts sharply by task type. A prompt shape that produces excellent analysis will actively damage a brainstorm, and vice versa. The exam presents this as scenarios where a technically well-formed prompt is applied to the wrong kind of task.",
    "The clearest way to hold it: ask what a <i>good</i> output looks like for this type. For analysis, defensible. For research, traceable. For drafting, on-voice and on-format. For brainstorming, wide. Those four adjectives drive four different prompts."]},
{h:"Analysis — make the reasoning visible",
 p:["Analytical tasks turn data or documents into a judgement. The risk is a confident conclusion whose reasoning you cannot inspect, which you then cannot defend to anyone who challenges it.",
    "Ask for the working before the conclusion. Requesting reasoning first genuinely improves analytical quality and lets you find the flawed step rather than just disagreeing with the answer.",
    "Define the criteria. \"Which of these vendors is best\" is unanswerable; \"rank these vendors on implementation risk, total three-year cost, and support coverage, weighting risk highest\" is a question with an answer.",
    "Ask for the counter-case. \"What would have to be true for the opposite conclusion?\" surfaces the assumptions a clean answer hides.",
    "Require grounding. Every claim should point at the data. Unsourced numbers in an analysis are the most dangerous single output shape, because they inherit the credibility of the ones around them."]},
{h:"Research — make the sources traceable",
 p:["Research tasks gather and synthesise information. The failure mode is a plausible synthesis you cannot trace, and that is squarely a Domain 2 problem you can prevent from the prompt.",
    "Say where the information may come from: the documents supplied, connected sources, or Claude's own knowledge — and require it to be labelled. Mixing them silently is what makes a research output impossible to check.",
    "Require explicit uncertainty: \"if you are not confident, say so; if the sources disagree, show both.\" A research output with no stated uncertainty is either trivial or untrustworthy.",
    "Ask for what is missing as well as what was found. Gaps are findings, and they are the part a synthesis naturally hides.",
    "Where a research feature is available, prefer it for questions that need current information gathered across multiple sources, rather than asking a plain chat to recall facts. Which product surface fits which job is Domain 3."]},
{h:"Drafting — supply voice and constraints",
 p:["Drafting produces a communication artefact: an email, a policy, a post, a summary. The output is judged on fit to audience and voice, so those must be in the prompt.",
    "Give a sample of the voice. One previous document in the right register beats any adjective. This is the task type where examples pay most.",
    "State the constraints hard: length, what must appear, what must not, the action you want the reader to take.",
    "Say what the reader already knows, so the draft neither over-explains nor assumes.",
    "Ask for one draft, then iterate — not five variants at once. Variants split the effort and leave you comparing four mediocre options instead of improving one good one. The exception is when you genuinely want range in the framing, which makes it a brainstorm."]},
{h:"Brainstorming — diverge before you converge",
 p:["Brainstorming wants range, and every instinct from the other three types suppresses range. This is the task type people get wrong most often, because they apply their analytical habits to it.",
    "Ask for volume and explicitly for unconventional entries. \"Twenty options including several you would expect to be rejected\" produces a different set from \"some good ideas.\"",
    "Do not impose a rigid template. Structure constrains the shape of what can be proposed. Save the structure for the evaluation pass.",
    "Separate the passes. Generate first; evaluate against your criteria second, in a distinct step. Evaluating inline collapses the range you were trying to create — this is the divergence/convergence seam from lesson 1.2.",
    "Avoid premature limits. \"Keep it under 50 words\" or \"just give me the best one\" turns a brainstorm into a decision, and a decision made before you have seen the options."]}
],
table: {cap:"Prompt shape by task type",
 head:["Task type","Good output is…","Emphasise","Avoid"],
 rows:[
 ["Analysis","Defensible","Explicit criteria; reasoning before conclusion; counter-case","Asking for the verdict alone"],
 ["Research","Traceable","Labelled sources; stated uncertainty; named gaps","Blending recalled and supplied facts silently"],
 ["Drafting","On-voice, on-format","A voice sample; hard constraints; reader's prior knowledge","Requesting many variants instead of iterating one"],
 ["Brainstorming","Wide","Volume; unconventional entries; separate evaluation pass","Rigid templates and early length caps"]]},
keyc: "Ask what a good output looks like for <i>this type of task</i>, then prompt for that property. Range for brainstorming, traceability for research, defensibility for analysis, fit for drafting — the four wants are different and partly opposed.",
traps: [
 {t:"Analytical rigour applied to a brainstorm",
  p:"Options that impose a strict template, demand the single best answer immediately, or cap the response length are wrong for idea generation even though they are excellent for analysis. Read the task type before the prompt technique."},
 {t:"Requesting variants instead of iterating a draft",
  p:"For drafting, 'give me five versions' is usually the weaker option. The stronger one supplies a voice sample and constraints and then iterates. Watch for the exception: when the scenario genuinely wants a range of framings, it is a brainstorm."},
 {t:"Research prompts with no uncertainty instruction",
  p:"An option that gathers and synthesises without requiring sources to be labelled or uncertainty to be stated sets up the Domain 2 failure. The stronger option builds the checkability in from the start."}
],
check: {
 q: "A marketing team wants a wide range of campaign concepts for a product launch, to narrow down next week. Which prompt is most appropriate?",
 o: [
 {t:"\"Give me the single strongest campaign concept for this launch, in under 100 words.\"", c:false, w:"Converges immediately and caps length — a decision, not a brainstorm."},
 {t:"\"Generate 20 campaign concepts spanning different emotional registers and channels, including several you would expect us to reject. One line each, no evaluation yet — we will assess against our criteria in a separate pass.\"", c:true, w:"Asks for volume and deliberate range, defers evaluation to a second pass, and keeps the format light so it does not constrain the ideas."},
 {t:"\"Produce campaign concepts using this template: headline, target segment, budget tier, channel mix, projected ROI.\"", c:false, w:"A rigid template constrains what can be proposed and demands numbers no one can supply at concept stage."},
 {t:"\"Analyse our three competitors' recent campaigns and recommend which approach we should copy.\"", c:false, w:"A well-formed analysis prompt answering a different question than the one asked."}],
 key: "Brainstorming wants range first and judgement second. Any option that evaluates, templates or caps during generation is applying the wrong task shape."},
ex: {
 mins: 30,
 title: "Run the same subject through all four task types",
 obj: ["Feel directly how differently each task type has to be prompted",
       "Build a reusable opener for each of the four types",
       "Catch yourself applying analytical habits to a brainstorm"],
 steps: [
 {s:"Choose one subject you know well — a process, product or decision at work.", why:"Holding the subject constant isolates the effect of task type, which is the whole point.", res:"One subject, four upcoming prompts."},
 {s:"Write an analysis prompt: state criteria, ask for reasoning before conclusion, and request the counter-case.", why:"The counter-case request is the part most people skip, and it is where the assumptions surface.", res:"A judgement you could defend in a meeting."},
 {s:"Write a research prompt: require sources to be labelled by origin, uncertainty stated, and gaps named.", why:"Building checkability into the prompt prevents the Domain 2 problem rather than catching it later.", res:"A synthesis you can actually verify."},
 {s:"Write a drafting prompt: attach a sample of the voice you want, plus hard constraints on length and content.", why:"Compare it against a version with no voice sample to see how much a single example carries.", res:"A draft that sounds like your organisation."},
 {s:"Write a brainstorm prompt: ask for 20 options with deliberate outliers and no evaluation. Then evaluate in a separate second prompt.", why:"Doing the two passes separately once is what makes the divergence/convergence seam stick.", res:"A wider option set than you expected, and a cleaner shortlist."},
 {s:"Save the four openers as reusable templates.", why:"Four templates cover most of what Domain 1 asks of you day to day.", res:"A personal prompt library of four."}]},
src: [
 {t:"Prompt engineering overview — Anthropic docs", u:"https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview"},
 {t:"Let Claude think (chain of thought)", u:"https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/chain-of-thought"},
 {t:"Use examples (multishot prompting)", u:"https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/multishot-prompting"}]
};
