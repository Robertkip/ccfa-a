/* Domain 2 — Output Evaluation and Validation (6 lessons) */

LESSONS["2.1"] = {
mins: 25,
sum: "Accuracy and completeness are two separate tests, and completeness is the one people skip. An output can contain no false statement and still be wrong to act on.",
know: [
{h:"Two tests, not one",
 p:["Evaluating an output means asking two independent questions. <b>Is everything here true?</b> And <b>is everything that should be here, here?</b> An output can pass the first and fail the second, and that failure is just as consequential.",
    "This matters because omission is invisible. A false statement announces itself the moment you check it; a missing risk, a missing exception, a missing counterparty simply is not there, and nothing in the output's tone signals the gap. A polished, confident, entirely true summary that leaves out the indemnity clause will get someone hurt.",
    "The exam treats omission as an accuracy failure in its own right, and several items turn on candidates recognising that \"nothing in it is wrong\" is not the same as \"it is right.\""]},
{h:"Confidence is not a signal",
 p:["The single most important idea in this domain: <b>the confidence of an output tells you nothing about its accuracy.</b> Fluency, structure, specificity and an authoritative register are properties of the writing, not evidence about the world. A fabricated case citation reads exactly like a real one.",
    "This cuts both ways. Hedged language does not indicate an output is more likely wrong, and confident language does not indicate it is more likely right. Neither is evidence. The only thing that establishes whether a claim is true is checking the claim.",
    "The practical consequence is that you cannot triage by feel. Reviewers who skim for things that \"look shaky\" systematically miss the confident fabrications and waste time on hedged statements that happened to be correct."]},
{h:"A workable evaluation pass",
 p:["A review that catches things has a shape. This one takes a few minutes and is worth running on anything consequential.",
    "<b>Scope.</b> Did it answer the question actually asked, or an adjacent easier one? Drift is common on multi-part requests, where one part gets a full treatment and another a single sentence.",
    "<b>Verifiable claims.</b> Mark every number, date, name, citation, quotation and statistic. These are the high-risk surface and they are also the fastest things to check. Anything specific enough to be checked should be checked.",
    "<b>Grounding.</b> For each marked claim, can you point at where it came from — the supplied document, a named source, or nothing? \"Nothing\" is the category that matters.",
    "<b>Completeness.</b> What would a domain expert expect to see that is not here? Exceptions, caveats, dissenting evidence, the option that was not considered, the party who was not mentioned.",
    "<b>Internal consistency.</b> Do the figures reconcile? Does the conclusion follow from the body? Does the summary match its own detail?",
    "<b>Fitness.</b> Is it right for the audience, the format and the decision? A technically correct output in the wrong register is still unusable."]},
{h:"Grounded is not the same as verified",
 p:["When you supply the source material, a different failure appears: the output may be well grounded in the document and still misrepresent it — by summarising selectively, by flattening a conditional into an absolute, or by attributing a hedged statement as a firm one.",
    "So the check against supplied material is not just \"does this sentence appear in the source\" but \"does this sentence carry the same meaning the source carried.\" Conditionals, exceptions and qualifiers are where meaning gets lost, and they are exactly the parts that summarisation tends to shed.",
    "It follows that supplying the source material reduces fabrication risk substantially but does not remove the need to review. It changes what you are checking for — from invention to distortion."]}
],
table: {cap:"Two tests, two failure shapes",
 head:["","Accuracy failure","Completeness failure"],
 rows:[
 ["What it looks like","A statement that is not true","A statement that should be there and is not"],
 ["How it announces itself","Not at all — it reads like the rest","Not at all — there is nothing to read"],
 ["Typical example","A plausible but invented statistic","The exception clause omitted from a summary"],
 ["How to catch it","Check every specific claim against a source","Ask what an expert would expect to see"],
 ["Prompt-side prevention","Require source-grounded claims","Name what must be covered, and ask what was left out"]]},
keyc: "Fluency is a property of the writing, not evidence about the world. Evaluate accuracy and completeness as two separate passes, because a confident output with nothing false in it can still be missing the thing that mattered.",
traps: [
 {t:"Treating an output with no false statements as verified",
  p:"The most common Domain 2 trap. If the scenario says a summary is 'accurate' and something material is absent, the correct answer names the omission as the accuracy problem — not the tone, the length or the format."},
 {t:"Judging reliability by how confident the output sounds",
  p:"Any option that triages by tone — reviewing the parts that 'seem uncertain' and accepting the parts that read authoritatively — is wrong. Confidence and correctness are unrelated."},
 {t:"Assuming supplied source material removes the need to review",
  p:"Grounding lowers fabrication risk; it does not prevent selective summarisation or the loss of a conditional. The right answer still involves a check, but of meaning rather than of invention."}
],
check: {
 q: "A team lead receives a two-page summary of a regulatory consultation. Every statement in it is accurate. It does not mention that the proposed rules exempt organisations under 250 employees — which describes the team lead's company. How should this output be characterised?",
 o: [
 {t:"Accurate and therefore acceptable; the omission is a scoping question for the requester.", c:false, w:"Treats absence of falsehood as sufficiency. The omitted exemption is the only fact that changes the decision."},
 {t:"An accuracy failure by omission — the summary is materially misleading for the decision it was meant to support.", c:true, w:"Completeness is part of accuracy. A summary that omits the fact that changes the answer is wrong for its purpose regardless of the truth of everything in it."},
 {t:"A formatting problem — the exemption should have been highlighted.", c:false, w:"Reframes a missing fact as a presentation issue."},
 {t:"Evidence of bias in the model requiring escalation to a different model.", c:false, w:"An omission in one summary is not evidence of systematic bias, and a model change is not the remedy for an unspecified summary."}],
 key: "Omission is an accuracy failure. Ask what a knowledgeable reader would expect to see, not only whether what is present is true."},
ex: {
 mins: 30,
 title: "Run the six-point evaluation pass on a real output",
 obj: ["Separate the accuracy pass from the completeness pass in your own review",
       "Discover how many specific claims you had been accepting unchecked",
       "Build a review habit that survives time pressure"],
 steps: [
 {s:"Take a Claude output you actually used at work in the last month, ideally one you did not review closely.", why:"Reviewing something you already trusted is what makes the exercise uncomfortable enough to be useful.", res:"One real output, plus its source material if any."},
 {s:"Highlight every number, date, name, citation and quotation. Count them.", why:"The count alone is usually surprising, and it defines the actual checking surface.", res:"Typically ten to thirty marked claims on a two-page output."},
 {s:"Check each marked claim against its source. Mark each as grounded, unsupported, or distorted.", why:"'Distorted' is the category people do not look for — a real fact whose qualifier was dropped.", res:"At least one item in the unsupported or distorted column."},
 {s:"Now do a separate pass asking only: what should be here and is not?", why:"Doing it as a separate pass matters; folded into the accuracy check it gets skipped.", res:"One or two omissions you had not noticed."},
 {s:"Write the one prompt instruction that would have prevented the biggest problem you found.", why:"Prevention at the prompt is cheaper than detection at review, and it links Domain 2 back to Domain 1.", res:"An instruction you add to your default prompts."}]},
src: [
 {t:"Reduce hallucinations — Anthropic docs", u:"https://docs.claude.com/en/docs/test-and-evaluate/strengthen-guardrails/reduce-hallucinations"},
 {t:"Claude Help Center", u:"https://support.claude.com"},
 {t:"Anthropic Academy — AI fluency courses", u:"https://anthropic.skilljar.com"}]
};

LESSONS["2.2"] = {
mins: 30,
sum: "Three distinct defects with three different signatures: fabrication, internal inconsistency, and bias. Telling them apart matters because each has a different remedy.",
know: [
{h:"Hallucination: confident, specific, unsupported",
 p:["A hallucination is a statement presented as fact that is not grounded in any source and is not true. The defining characteristic is that it is indistinguishable in style from the true statements around it — same register, same specificity, same confidence.",
    "Where it concentrates: citations and references; statistics and precise figures; names, titles and attributions; dates; quotations; URLs; specific provisions in documents the model was not given; and details about niche, recent or proprietary subjects.",
    "The pattern to internalise is that fabrication rises where the model has thin or no grounding and the prompt demands specificity anyway. Asking for \"five studies supporting this\" when there may only be two invites the other three into existence. A prompt that permits \"I could not find enough evidence\" gets fewer invented studies.",
    "Prevention beats detection. Supply the source material; require every claim to point at it; explicitly permit and request the answer \"the source does not say.\" These are prompt-side moves that make the review cheaper."]},
{h:"Inconsistency: the output contradicts itself",
 p:["Inconsistency is a different defect: the output disagrees with itself, or with material supplied earlier in the same conversation. Crucially, you can detect it without any external source — everything you need is on the page.",
    "The usual forms are a summary that does not match its own detail; totals that do not reconcile with their components; a conclusion the body does not support; a recommendation contradicting a constraint stated in the prompt; and drift across a long session where an early instruction quietly stops being applied.",
    "Because it is internally detectable, inconsistency is the cheapest defect to find, and finding one is diagnostically valuable: it tells you the output was not coherently reasoned, which raises your prior that other parts are also unreliable."]},
{h:"Bias: which lens, which voices, which default",
 p:["Bias in this context is not a claim about intent. It is the observation that an output can be systematically skewed — by what the training data over-represented, by how the prompt was framed, or by whose perspective is treated as the default.",
    "<b>Framing bias</b> is the one you control directly and cause most often. \"Explain why this initiative failed\" presupposes failure and will produce reasons for it. \"Assess the outcome of this initiative\" does not.",
    "<b>Representation bias</b> shows up as advice that assumes a large US company, a particular regulatory regime, an able-bodied user, or an industry norm that is not yours — presented as universal.",
    "<b>Anchoring on the prompt.</b> If you say \"we think it's the payment gateway,\" the analysis will tend to arrive there. On diagnostic work, ask for the alternatives before you share your hypothesis.",
    "<b>Consequential bias</b> is the category that matters most for Domain 6: skew in outputs that affect people — hiring, lending, performance, discipline, access. This is where bias stops being a quality issue and becomes a governance one, and where the exam expects a human decision-maker rather than a better prompt."]},
{h:"Telling them apart",
 p:["The three defects have three remedies, which is why the exam makes you distinguish them.",
    "Fabrication is fixed by grounding: supply sources, require attribution, permit uncertainty, verify externally. A second model checking the first does not help, because it has no more access to the truth than the first.",
    "Inconsistency is fixed by structure: decompose, ask for reasoning to be shown, restate constraints, restart a drifted session. Pointing the contradiction out directly usually works.",
    "Bias is fixed by framing and by people: neutral prompts, explicit requests for the counter-case and for whose perspective is missing, diverse review, and human decision-making wherever the output affects a person.",
    "Applying the wrong remedy is a signature wrong answer — \"reduce bias by supplying more sources,\" \"fix a fabrication by rephrasing more neutrally.\""]}
],
table: {cap:"Three defects, three signatures, three remedies",
 head:["Defect","How to spot it","Remedy"],
 rows:[
 ["Hallucination","A specific, confident claim with no traceable source","Ground in supplied sources; require attribution; permit 'not stated'; verify externally"],
 ["Inconsistency","The output contradicts itself or the prompt's constraints","Point it out; decompose; show reasoning; restart a drifted session"],
 ["Bias","One perspective treated as default; framing echoed back","Neutral framing; request counter-case and missing perspectives; human decision on consequential calls"]]},
keyc: "Fabrication needs grounding, inconsistency needs structure, bias needs framing and people. Naming the defect correctly is what selects the remedy — and the exam's wrong answers are usually the right remedy for the wrong defect.",
traps: [
 {t:"Using Claude to verify Claude",
  p:"Asking the same or another model whether an output is accurate does not establish accuracy for external facts. It can catch inconsistency and gaps in reasoning. If an option offers self-checking as verification of facts, it is wrong."},
 {t:"Adding a disclaimer instead of a correction",
  p:"'Note that details may be inaccurate' does not make an output usable. It transfers the problem to the reader. Options that mitigate with a caveat rather than fixing or verifying are wrong."},
 {t:"Treating hedged language as a reliability signal",
  p:"Some items describe an output that 'expressed uncertainty' and ask whether that makes it safe. It does not. Uncertainty language is not calibrated evidence about which specific claims are wrong."}
],
check: {
 q: "An output summarising an internal policy states in paragraph two that the approval threshold is £50,000 and in the summary box that it is £5,000. The policy document was supplied. What is the most accurate characterisation and the right first response?",
 o: [
 {t:"A hallucination; supply additional authoritative sources on approval thresholds.", c:false, w:"The source was supplied and the two figures are internally contradictory — this is inconsistency, and external sources are not the remedy for an internal policy figure."},
 {t:"An internal inconsistency; check both figures against the supplied policy and point out the contradiction, treating it as a signal to review the rest of the output more closely.", c:true, w:"Correctly names a defect detectable without leaving the page, applies the structural remedy, and draws the right inference about the reliability of the remainder."},
 {t:"A formatting artefact in the summary box; correct it and proceed.", c:false, w:"Assumes which figure is right without checking, and dismisses a signal about the coherence of the whole output."},
 {t:"Evidence of bias toward conservative thresholds; reframe the prompt more neutrally.", c:false, w:"Applies the bias remedy to a contradiction, which is the classic wrong-remedy error."}],
 key: "An output that contradicts itself was not coherently reasoned, so the contradiction is evidence about the rest of it — not just one line to patch."},
ex: {
 mins: 30,
 title: "Provoke and classify each defect",
 obj: ["See each of the three defects in an output you produced deliberately",
       "Practise selecting the right remedy for each",
       "Learn which prompt instructions suppress fabrication in your own work"],
 steps: [
 {s:"Ask for five sources on a narrow, recent topic in your field, with full citations, and do not supply any documents.", why:"Demanding specificity where grounding is thin is the condition that produces fabrication.", res:"Citations you can check — some of which will not survive checking."},
 {s:"Verify each citation independently. Note how the real and the invented ones read identically.", why:"This is the experience that ends the habit of triaging by tone.", res:"A direct demonstration that confidence carries no information."},
 {s:"Repeat the request adding: 'use only the attached documents; cite the page for every claim; if the documents do not support a point, say so.'", why:"Comparing the two runs shows how much of the problem is preventable at the prompt.", res:"Markedly fewer unsupported claims, and explicit 'not stated' answers."},
 {s:"Ask a long multi-part question and check whether the summary reconciles with the body and the totals with their parts.", why:"Inconsistency is free to detect and is the cheapest routine check to adopt.", res:"At least one place where the summary drifts from the detail."},
 {s:"Ask the same evaluative question twice — once as 'why did X fail' and once as 'assess the outcome of X' — and compare.", why:"Framing bias is the form you cause yourself, so seeing it in your own prompt is the lesson.", res:"Two different analyses of the same events."},
 {s:"Write down the remedy you would apply to each of the three, in one line each.", why:"Naming remedy-to-defect is exactly what the exam asks you to do.", res:"A three-line reference you can recall under time pressure."}]},
src: [
 {t:"Reduce hallucinations — Anthropic docs", u:"https://docs.claude.com/en/docs/test-and-evaluate/strengthen-guardrails/reduce-hallucinations"},
 {t:"Anthropic usage policy", u:"https://www.anthropic.com/legal/aup"},
 {t:"Claude Help Center", u:"https://support.claude.com"}]
};

LESSONS["2.3"] = {
mins: 25,
sum: "Verification means comparing a claim against something outside the output. Everything else — plausibility, self-review, consensus between models — feels like checking and is not.",
know: [
{h:"The definition that decides most items",
 p:["<b>Verification is comparison against an independent source.</b> Not a source the model produced, not the model's own assessment, not your sense that it sounds right. Something outside the output, that would have been true whether or not the output existed.",
    "Almost every wrong answer in this task statement fails this definition in one of four ways: it substitutes plausibility for evidence, it asks the model to check itself, it treats agreement between models as confirmation, or it substitutes a disclaimer for a check.",
    "Consensus deserves particular attention. Two models agreeing tells you they share training data and tendencies. If both were likely to make the same error — and on obscure or commonly-misstated facts they are — agreement is not independent evidence. It is one observation reported twice."]},
{h:"Prioritise: you cannot check everything",
 p:["Real verification is triaged by consequence, not by volume. Check first the claims where being wrong would cost the most.",
    "<b>Always check:</b> figures that go into a decision or a document that leaves the organisation; citations, references and quotations attributed to a real source; names, titles and attributions of statements to people; legal, regulatory, medical, financial and safety claims; anything about a specific person; anything that will be published.",
    "<b>Check by sampling:</b> long lists of similar items, where a sample of five tells you a great deal about the reliability of fifty.",
    "<b>Lower priority:</b> general explanation of well-established concepts, structure and organisation, tone and phrasing, and anything you will independently review at a later stage anyway.",
    "This triage is itself an exam-tested skill. Items that describe a low-stakes internal brainstorm and offer full independent verification of every claim are testing whether you can distinguish proportionate from performative."]},
{h:"Techniques that actually verify",
 p:["<b>Source-grounded prompting.</b> Supply the documents and require page or section attribution for each claim. This does not verify — it makes verification fast, by turning \"is this true\" into \"is this on that page.\"",
    "<b>Spot-check the specifics.</b> Take the numbers and citations and check them directly against the primary source. Fastest high-yield check available.",
    "<b>Recompute independently.</b> For any arithmetic that matters, do the calculation yourself or in a spreadsheet. Do not ask for it to be recalculated in the same conversation.",
    "<b>Compare against a known-good reference.</b> A prior approved document, a system of record, an authoritative standard.",
    "<b>Ask a person who knows.</b> For domain specifics, subject-matter review is verification and is often faster than document archaeology.",
    "<b>Trace to primary sources.</b> Do not stop at a secondary summary of a study; the misstatement is usually introduced in the summarising.",
    "And the one technique that is legitimate but limited: asking Claude to critique its own output. Genuinely useful for logical gaps, missing considerations and internal contradictions. Not evidence about external facts. Both halves of that sentence are examinable."]},
{h:"Building verification into the workflow",
 p:["Verification that depends on individual diligence degrades under deadline pressure. Designing it in is more reliable than intending to do it.",
    "Require sources at the prompt so the checking surface is visible rather than buried in prose. Keep a standing checklist for recurring output types — the invoice summary always needs the totals recomputed, the client memo always needs the citations traced.",
    "Put the verification step in the process before the point of no return, not after: before it is sent, published, filed or committed. A check that happens after the output has left the building is not a control.",
    "Record what was checked and by whom for anything consequential. In a regulated environment this is often required; everywhere else it is what lets you find the gap when something does go wrong. This is the handover into Domain 4's control design and Domain 6's governance."]}
],
table: {cap:"Verification and its impostors",
 head:["Approach","Does it verify?","What it is actually good for"],
 rows:[
 ["Compare a figure against the primary source","Yes","The core act of verification"],
 ["Independently recompute a calculation","Yes","Arithmetic that feeds a decision"],
 ["Subject-matter expert review","Yes","Domain specifics no document settles"],
 ["Asking Claude to check its own answer","No","Logic gaps, omissions, internal contradictions"],
 ["Asking a second model and comparing","No","Surfacing disagreement worth investigating"],
 ["It reads plausibly and is well structured","No","Nothing — fluency is not evidence"],
 ["Adding a caveat that details may be wrong","No","Nothing — it moves the risk to the reader"]]},
keyc: "If the check never leaves the model, it is not verification. Self-review finds gaps in reasoning; only an independent source establishes whether a claim about the world is true.",
traps: [
 {t:"Cross-model agreement as confirmation",
  p:"Presented as rigour because it involves two systems. Models share data and failure modes, so agreement is correlated, not independent. Disagreement is informative; agreement is not."},
 {t:"Verifying everything regardless of consequence",
  p:"The reverse trap. In a low-stakes internal scenario, the option demanding full independent verification of every claim is disproportionate. Match the depth of the check to the cost of being wrong."},
 {t:"Verifying after the output has been used",
  p:"An option that reviews outputs after they have been sent to clients is not a control. The check has to sit before the irreversible step."}
],
check: {
 q: "An associate has drafted a client-facing market note using Claude. It cites four industry reports with specific figures. Under deadline, which verification approach is most appropriate?",
 o: [
 {t:"Ask Claude to double-check its own figures and confirm the citations are real.", c:false, w:"The check never leaves the model. It cannot establish that an external report exists or says what is claimed."},
 {t:"Run the same question through a second model and treat matching figures as confirmed.", c:false, w:"Agreement between models is correlated, not independent. Both can share the same error."},
 {t:"Open each of the four cited reports and confirm the figures and that the reports exist, before the note goes to the client.", c:true, w:"Independent comparison against primary sources, placed before the irreversible step, and proportionate because the note leaves the organisation."},
 {t:"Add a disclaimer that figures are indicative and derived from AI-assisted research.", c:false, w:"Transfers the risk to the client rather than removing it, and does not make the note accurate."}],
 key: "Client-facing plus specific citations is the highest-priority verification category. Four sources is a few minutes of checking, so deadline pressure does not change the answer."},
ex: {
 mins: 25,
 title: "Build a verification checklist for one recurring output",
 obj: ["Triage claims by consequence rather than checking indiscriminately",
       "Convert diligence into a checklist that survives deadline pressure",
       "Place the check before the irreversible step"],
 steps: [
 {s:"Pick one output type you produce repeatedly with Claude — a weekly summary, a client note, a set of release notes.", why:"Recurring outputs are where a checklist pays back; one-offs do not justify one.", res:"One named output type."},
 {s:"List every category of claim it contains, then mark each always-check, sample, or low-priority.", why:"This is the triage step, and doing it once means you do not re-litigate it under deadline.", res:"A short categorised list, usually three or four always-check items."},
 {s:"For each always-check item, name the independent source you will compare against.", why:"'Check the figures' is not actionable; 'against the finance system export' is.", res:"A named source per item — and possibly the discovery that one claim has no checkable source."},
 {s:"Identify the point of no return for this output and place the check immediately before it.", why:"A verification step after publication is documentation, not a control.", res:"A specific position in your process."},
 {s:"Add the prompt instruction that makes the checking surface visible — require attribution for the always-check categories.", why:"Prompt-side grounding turns 'is this true' into 'is this where it says it is', which is far faster.", res:"An updated default prompt, or Project instructions if it recurs."},
 {s:"Run it once and time it. If it takes more than a few minutes, your triage is too broad.", why:"A checklist nobody has time for is not a control either.", res:"A checklist you will still be using in a month."}]},
src: [
 {t:"Reduce hallucinations — Anthropic docs", u:"https://docs.claude.com/en/docs/test-and-evaluate/strengthen-guardrails/reduce-hallucinations"},
 {t:"Claude Help Center", u:"https://support.claude.com"},
 {t:"Anthropic Academy", u:"https://anthropic.skilljar.com"}]
};

LESSONS["2.4"] = {
mins: 25,
sum: "Some outputs need a glance, some need an expert, and some need a named person to decide. The variables are consequence, reversibility, exposure and how checkable the claim is.",
know: [
{h:"Four variables set the level of review",
 p:["\"When is human review required\" is not a matter of taste. Four properties of the task determine it, and the exam scenarios vary them deliberately.",
    "<b>Consequence.</b> What happens if this is wrong — mild embarrassment, or financial loss, legal exposure, or harm to a person?",
    "<b>Reversibility.</b> Can it be corrected after the fact? An internal draft is reversible. A sent email, a published page, a filed return, a communication to a regulator or a decision conveyed to a candidate is not.",
    "<b>Exposure.</b> Does it leave the organisation, become part of a record, or reach a customer, a regulator or the public? Anything external raises the bar.",
    "<b>Checkability.</b> Can a non-expert confirm it, or does it need someone who knows the domain? Legal, medical, financial, safety and regulatory content usually needs a qualified person, not a careful generalist."]},
{h:"Three levels of review",
 p:["<b>Light review</b> — the author reads it properly before use. Appropriate for reversible, internal, low-consequence work: a first draft, a brainstorm, a personal summary, exploratory analysis. Note that even here, review means reading it, not glancing at it.",
    "<b>Substantive review</b> — someone competent checks the specific claims against sources before it is used. Appropriate for anything leaving the team, informing a decision, or containing figures and citations.",
    "<b>Expert or accountable review</b> — a qualified person reviews and takes responsibility for the content. Required where the domain demands qualification, where a professional or regulatory duty attaches, or where the output affects a person's rights, money, employment, health or access to a service.",
    "The mistake to avoid is treating this as a single global setting. The right level is a property of the task, and a person who applies expert review to their own brainstorms will not sustain it where it matters."]},
{h:"Decisions that do not delegate",
 p:["Beyond review levels there is a harder line: some decisions must be made by a person, however good the output is. This overlaps with Domain 6 and the exam tests it from both sides.",
    "The category is decisions that materially affect a person's rights, livelihood or wellbeing: hiring and firing, promotion and performance outcomes, credit and lending, insurance, disciplinary action, eligibility for a service or benefit, medical and clinical decisions, legal advice and legal conclusions, and anything with a regulatory duty attached.",
    "In these cases Claude can legitimately do a great deal — summarise, structure, draft, surface considerations, prepare the material. What it cannot do is be the decision-maker, and the presence of a person who rubber-stamps the output without engaging is not meaningfully different from no person at all.",
    "The exam wording to watch for is a human \"in the loop\" who has no real capacity to disagree — reviewing 400 items an hour, or approving in bulk. If the reviewer cannot exercise judgement, the control does not exist."]},
{h:"Designing the checkpoint so it holds",
 p:["A review requirement that depends on remembering will fail under pressure. Four design properties make one hold.",
    "<b>Placed before the irreversible step</b> — before send, publish, file, commit, or communicate.",
    "<b>Assigned to a named role</b>, not to \"the team.\" Diffuse responsibility means no responsibility.",
    "<b>Specific about what is being checked</b> — the figures against the source system, the citations against the originals — rather than a general instruction to look it over.",
    "<b>Proportionate enough to be sustainable.</b> A control that makes the work impossibly slow gets bypassed within a fortnight, and a bypassed control is worse than a lighter one that is actually applied, because it creates a false record of assurance."]}
],
table: {cap:"Review level by task shape",
 head:["Situation","Level","Why"],
 rows:[
 ["Personal draft or brainstorm, internal only","Light — author reads it","Reversible, low consequence, no exposure"],
 ["Internal analysis informing a team decision","Substantive — check the figures","Feeds a decision; errors propagate"],
 ["Anything sent to a customer or published","Substantive at minimum","Irreversible and externally exposed"],
 ["Legal, medical, financial or regulated content","Expert review","Not checkable by a competent generalist"],
 ["Output affecting a person's job, money or access","Accountable human decision","Consequence to a person; decision cannot be delegated"],
 ["Code going to production","Substantive plus testing","Irreversible in effect; failure is systemic"]]},
keyc: "Set the review level from consequence, reversibility, exposure and checkability — and remember that a reviewer with no realistic capacity to disagree is not a control, only the appearance of one.",
traps: [
 {t:"A uniform review policy for all outputs",
  p:"Options that mandate the same review for everything are wrong in both directions: too heavy for brainstorms, and they collapse under their own weight so the heavy cases stop being covered."},
 {t:"A human in the loop who cannot actually judge",
  p:"Watch for reviewers processing implausible volumes, approving in bulk, or lacking the domain knowledge to disagree. The exam treats this as no control at all."},
 {t:"Review placed after the irreversible step",
  p:"Sampling outputs weekly after they have gone to customers is monitoring, not review. Useful, but it is not the control the scenario needs."}
],
check: {
 q: "A benefits administrator wants to use Claude to assess incoming eligibility applications, with a caseworker approving the outcomes. Volumes mean each caseworker would approve roughly 300 assessments per day. What is the most significant problem?",
 o: [
 {t:"The model may be inconsistent between similar applications, so a more capable tier should be used.", c:false, w:"Real, but secondary — and a model change does not address a decision that affects people's access to a benefit."},
 {t:"At that volume the caseworker cannot meaningfully review each case, so the human approval is nominal and eligibility is effectively being decided automatically.", c:true, w:"Identifies both failures at once: a consequential decision about a person delegated in substance, and a control that exists on paper only."},
 {t:"Applicants should be told that AI was involved in processing.", c:false, w:"Transparency is necessary but does not make an unreviewable automated eligibility decision acceptable."},
 {t:"Application data should not be processed without a data protection assessment.", c:false, w:"A genuine Domain 6 requirement, but it does not address the review capacity problem the scenario is built around."}],
 key: "Count the volume against the reviewer's capacity. When the arithmetic makes real judgement impossible, the human checkpoint is decorative."},
ex: {
 mins: 25,
 title: "Classify your own outputs into review levels",
 obj: ["Apply the four variables to real work rather than to exam scenarios",
       "Find the outputs that are currently under-reviewed",
       "Design one checkpoint that will survive a busy week"],
 steps: [
 {s:"List the six to ten things you most often use Claude for at work.", why:"A concrete list stops the exercise becoming a policy discussion.", res:"A short list of real recurring tasks."},
 {s:"Score each on consequence, reversibility, exposure and checkability.", why:"Scoring separately prevents a single gut feeling from setting the level.", res:"Scores that usually cluster into obvious light/substantive/expert groups."},
 {s:"Assign a review level to each and mark where your current practice differs.", why:"The gap is the finding. Most people over-review one thing and under-review another.", res:"At least one under-reviewed output, and probably one over-reviewed."},
 {s:"For the most under-reviewed one, write the checkpoint: what is checked, by which named role, at which point in the process.", why:"Specificity is what makes a control real rather than an intention.", res:"A checkpoint you could hand to someone else."},
 {s:"Sanity-check it against a busy week: could it still be done, honestly, at peak volume?", why:"A control that is bypassed under pressure creates false assurance, which is worse than a lighter control that holds.", res:"Either a workable checkpoint, or a proportionate one you actually adopt."}]},
src: [
 {t:"Anthropic usage policy", u:"https://www.anthropic.com/legal/aup"},
 {t:"Claude Help Center", u:"https://support.claude.com"},
 {t:"Anthropic Academy", u:"https://anthropic.skilljar.com"}]
};

LESSONS["2.5"] = {
mins: 20,
sum: "Turning a correct output into a usable one: editing for a specific reader, adapting one piece of work across audiences, and comparing candidate outputs against criteria rather than by feel.",
know: [
{h:"Correct is not the same as usable",
 p:["An output can survive every accuracy and completeness check and still be the wrong document to send. Register, length, structure, what is assumed and what is spelled out are all properties of fit rather than of truth, and they determine whether the work lands.",
    "This task statement is where Domain 2 stops being about defect-finding and becomes about craft. The exam asks you to judge fit for a named audience and to make targeted adaptations rather than generic improvements."]},
{h:"Editing for a specific reader",
 p:["Ask four questions about the reader before you edit a word. What do they already know? What decision are they making? How much time will they give it? What would make them stop reading?",
    "The answers drive concrete edits. An executive reader gets the conclusion first, the implication second, and detail available but not in the way. A specialist reader gets precision and can be trusted with terminology. A customer gets plain language, no internal vocabulary, and an explicit next step. A regulator gets exactness, completeness and traceability, and no persuasive framing.",
    "The most common editing failure is deleting length without changing structure. A 2,000-word analysis cut to 600 words is still a 2,000-word structure. Reordering for the reader — conclusion first for someone deciding, chronology for someone investigating — usually does more than cutting.",
    "The second most common is leaving in the vocabulary of the wrong audience. Internal shorthand, product code names and team jargon survive a rewrite unless you look for them deliberately."]},
{h:"Adapting one piece across audiences",
 p:["Work often has to reach several audiences: the same analysis becomes a board slide, a team briefing and a customer note. Adapting is not summarising at three lengths.",
    "Each version has a different <i>purpose</i>, so each keeps different content. The board version keeps the decision and the risk. The team version keeps the method and the actions. The customer version keeps the impact on them and what happens next. Material that is central in one is absent from another.",
    "Adapt from the source, not from the previous adaptation. Chaining adaptations compounds the losses — the customer note derived from the board slide derived from the analysis has lost two rounds of qualifiers, and this is exactly where a conditional silently becomes an absolute.",
    "And re-check the facts in each version. Adaptation is where a hedge becomes a promise: \"we expect to restore service by Friday in most cases\" becomes \"service will be restored by Friday.\""]},
{h:"Comparing outputs on criteria",
 p:["When you have two or more candidate outputs, comparing by feel selects for fluency — which, as lesson 2.1 established, is not a quality signal.",
    "Write the criteria before you read the candidates: accuracy, completeness against a specific list of required points, fit for the named audience, actionability, and length. Then score each candidate against each criterion.",
    "The best final version is frequently a composite: the structure of one, the opening of another, a paragraph of a third. Treat candidates as material rather than as finished alternatives you must choose between.",
    "Watch for two biases. Order effects — the first version you read anchors your judgement of the rest — and length bias, where the longer output reads as more thorough regardless of content. Reading them in a different order, or scoring one criterion across all candidates before moving to the next, both help."]}
],
table: {cap:"Same analysis, four readers",
 head:["Reader","Leads with","Keeps","Drops"],
 rows:[
 ["Executive","The decision and its implication","Risk, cost, the recommendation","Method, intermediate working"],
 ["Specialist team","The method and the findings","Assumptions, limitations, next actions","Business framing they already have"],
 ["Customer","What it means for them","Impact, timeline, what happens next","Internal vocabulary, root-cause detail"],
 ["Regulator","The complete factual position","Everything material, with traceability","Persuasive framing and selective emphasis"]]},
keyc: "Adapt from the source every time, never from the previous adaptation — chained adaptations shed qualifiers, and a hedge that becomes a promise is a factual error introduced by editing.",
traps: [
 {t:"Shortening as a substitute for restructuring",
  p:"An option that just cuts the word count for an executive audience is weaker than one that reorders to put the decision first. Length is a symptom; structure is the problem."},
 {t:"Adapting from the adaptation",
  p:"Scenarios describing a customer note derived from an internal summary derived from the source are flagging compounded loss. The right answer returns to the source."},
 {t:"Choosing between candidates by overall impression",
  p:"Any option that picks the version that 'reads best' is wrong. The right approach names criteria first, and often builds a composite rather than choosing."}
],
check: {
 q: "An incident analysis has been adapted into an internal summary, and a customer notification is now being written from that summary. The original says \"service is expected to be fully restored by Friday for most affected accounts.\" What is the main risk in this workflow?",
 o: [
 {t:"The customer notification may be too long for its audience.", c:false, w:"A real fit concern, but not the risk the chain creates."},
 {t:"Each adaptation sheds qualifiers, so \"expected… for most accounts\" can become an unconditional Friday commitment to customers.", c:true, w:"Names the specific compounding failure of chained adaptation, and the qualifier at issue is precisely the kind that gets lost."},
 {t:"Customers should not be told an incident occurred until it is fully resolved.", c:false, w:"Not a consequence of the adaptation chain, and generally poor incident practice."},
 {t:"The internal summary should have been written by a different model than the analysis.", c:false, w:"Model variety does not address qualifier loss during adaptation."}],
 key: "Hedges are the first thing lost in adaptation and the most costly, because a lost hedge turns an estimate into a commitment."},
ex: {
 mins: 25,
 title: "Adapt one analysis for three readers, from source each time",
 obj: ["Practise reordering rather than shortening",
       "See qualifier loss happen and prevent it",
       "Build the habit of criteria-first comparison"],
 steps: [
 {s:"Take one substantive analysis you have produced. Identify three real audiences for it.", why:"Real audiences have real prior knowledge, which is what drives the differences.", res:"One source document, three named readers."},
 {s:"For each reader, write the four answers: what they know, what they are deciding, how much time, what makes them stop reading.", why:"Doing this before writing prevents all three versions coming out as the same document at three lengths.", res:"Three short reader profiles."},
 {s:"Produce all three versions from the original source, never from each other.", why:"This is the discipline the lesson turns on, and doing it deliberately once makes the reason obvious.", res:"Three genuinely different documents."},
 {s:"Now deliberately produce a fourth by adapting version one into version three's audience. Compare the qualifiers against the source.", why:"Seeing your own hedge become a promise is more convincing than being told it happens.", res:"At least one qualifier lost or hardened."},
 {s:"Write your comparison criteria, then score the two customer versions against them.", why:"Scoring after writing the criteria prevents fluency from deciding.", res:"A defensible choice, or a composite of both."}]},
src: [
 {t:"Prompt engineering overview — Anthropic docs", u:"https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview"},
 {t:"Claude Help Center", u:"https://support.claude.com"},
 {t:"Anthropic Academy", u:"https://anthropic.skilljar.com"}]
};

LESSONS["2.6"] = {
mins: 20,
sum: "Choosing the shape information takes. Format is a decision about how the reader will use the output, and the wrong shape hides exactly the thing you needed to see.",
know: [
{h:"Format follows use",
 p:["The format question is not \"what looks tidy\" but \"what will the reader do with this?\" Someone comparing options needs a table. Someone following a process needs numbered steps. Someone deciding needs a recommendation with its reasoning. Someone auditing needs a traceable record.",
    "The wrong format actively conceals. Comparative information in prose forces the reader to hold six variables in their head and they will not; the comparison simply does not get made. Sequential instructions in a paragraph get steps skipped. Quantitative trends in a bullet list lose the shape of the trend entirely.",
    "Which makes format part of accuracy in a practical sense: an output that is true but shaped so the reader cannot extract the point has failed at its job."]},
{h:"Matching shape to content",
 p:["<b>Prose</b> for argument, nuance and narrative — anything where the connections between points carry the meaning.",
    "<b>Bullets</b> for parallel items of similar weight. Their failure mode is that they strip the relationships between points, so an argument reduced to bullets loses its logic while looking clearer.",
    "<b>Numbered steps</b> for sequence and process, where order matters and each step must be completed.",
    "<b>Tables</b> for comparison across a consistent set of dimensions. The strongest and most under-used format in business writing.",
    "<b>Structured data</b> — CSV, JSON — when the output feeds another system rather than a reader.",
    "<b>Executive shape</b> — conclusion, then implication, then supporting detail — for anyone deciding under time pressure.",
    "<b>Q&A</b> for reference material people will search rather than read.",
    "A common error is layering: a table inside bullets inside sections. Structure should reveal the content's own shape, not demonstrate effort."]},
{h:"Curation is selection, not compression",
 p:["Curating means deciding what belongs, in what order, at what depth — for this reader and this purpose. It is a series of judgements about relevance, and it is the part that cannot be delegated wholesale, because relevance depends on context only you have.",
    "The three moves are <b>select</b> (what is in and what is out), <b>order</b> (what comes first, which for a decision-maker is the conclusion and for an investigator is the chronology) and <b>weight</b> (how much space each part earns).",
    "Two failures recur. Including everything found, because it was found — volume as a proxy for thoroughness. And burying the significant item in the middle of a list of routine ones, so the one thing that mattered arrives with the same weight as everything else.",
    "Curation also has an honesty requirement: selecting only the evidence that supports a preferred conclusion is a bias problem, not an editorial one. If you drop the contrary findings, say that you did and why."]},
{h:"Getting the format you want",
 p:["Specify the format in the prompt rather than reformatting afterwards. \"A table with these five columns,\" \"under 200 words, conclusion first,\" \"numbered steps, one action per step\" are specifications. \"Well organised\" is not.",
    "Giving an example of the target format is faster than describing it, particularly for anything with a house style.",
    "Where the output feeds a system, be exact about the schema — field names, types, what to emit when a value is unknown. Ambiguity there produces output that is nearly parseable, which is worse than output that clearly is not.",
    "And where the output is going into a document you will keep working on, an artifact is usually the right surface: it gives you a persistent, editable version alongside the conversation rather than a block of chat you have to copy out. Which product surface fits which job is Domain 3."]}
],
table: {cap:"Format by what the reader will do",
 head:["The reader will…","Format","Failure if you get it wrong"],
 rows:[
 ["Compare options across dimensions","Table","In prose, the comparison is never actually made"],
 ["Follow a process","Numbered steps","In a paragraph, steps get skipped"],
 ["Decide quickly","Conclusion first, then support","Buried recommendation is a missed decision"],
 ["Follow an argument","Prose","Bulleted, the logic connecting points disappears"],
 ["Look something up later","Q&A or headed sections","Narrative is unsearchable"],
 ["Feed it to a system","CSV or JSON with a stated schema","Nearly-valid output is worse than clearly invalid"],
 ["Keep editing it","An artifact","Buried in chat history and copied out by hand"]]},
keyc: "Format is a decision about use, not decoration. Ask what the reader will do with the output, then pick the shape that makes that action easy — and remember that bullets strip the relationships between points.",
traps: [
 {t:"Bullets as the default for everything",
  p:"An option that bullets a nuanced argument for readability is wrong. Bullets suit parallel items; they destroy the connective logic that makes an argument an argument."},
 {t:"Reformatting by hand every time instead of specifying it once",
  p:"For a recurring output, the right answer specifies the format in the prompt — or in Project instructions if it recurs — rather than fixing the shape manually each round."},
 {t:"Curating by including everything found",
  p:"Volume presented as thoroughness. The stronger option selects for relevance to the decision and flags what was excluded, rather than handing over the full set."}
],
check: {
 q: "A procurement lead asks for an assessment of four suppliers across price, implementation time, support coverage, contract flexibility and references. The response is six well-written paragraphs, one per supplier plus a conclusion, and is factually sound. What is the main problem?",
 o: [
 {t:"It is too long and should be cut to half the length.", c:false, w:"Length is not the issue; the same content at half the length would still not support comparison."},
 {t:"Prose forces the reader to hold five dimensions across four suppliers in their head, so the comparison the request was for cannot actually be made — this needs a table.", c:true, w:"Names the mismatch between the reader's task and the shape of the output, and the format that fits."},
 {t:"It should have led with a recommendation.", c:false, w:"Reasonable, but the request was for an assessment across stated dimensions; the structural failure is the missing comparison grid."},
 {t:"The supplier references should have been independently verified first.", c:false, w:"A legitimate Domain 2 verification point, but not the problem this scenario is describing."}],
 key: "Four items across five dimensions is a table, always. If the reader's task is comparison, prose has hidden the very thing they asked for."},
ex: {
 mins: 20,
 title: "Reshape three outputs to match how they are used",
 obj: ["Notice format mismatches in your own recent work",
       "Practise specifying format in the prompt rather than fixing it afterwards",
       "See how much a table recovers from a comparative prose answer"],
 steps: [
 {s:"Find three recent outputs you reformatted by hand before using.", why:"Manual reformatting is the reliable signal that the prompt did not specify format.", res:"Three examples, probably including at least one comparison."},
 {s:"For each, write one sentence on what the reader was going to do with it.", why:"The use determines the shape, and writing it down usually makes the right format obvious.", res:"Three use statements."},
 {s:"Re-request each with an explicit format specification matching that use.", why:"Comparing against your manual reformat shows how much of the work was avoidable.", res:"Outputs that need no reshaping."},
 {s:"Take the most comparative one and request it as a table with named columns. Compare against the prose version.", why:"The recovery from prose to table on comparative content is usually dramatic enough to change your defaults.", res:"A comparison you can actually make at a glance."},
 {s:"Add your standing format preferences to Project instructions for the work where they recur.", why:"A format you specify once and get every time is Domain 5 configuration doing Domain 2 work.", res:"One less thing to say in every prompt."}]},
src: [
 {t:"Claude Help Center — artifacts and formatting", u:"https://support.claude.com"},
 {t:"Prompt engineering overview — Anthropic docs", u:"https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview"},
 {t:"Anthropic Academy", u:"https://anthropic.skilljar.com"}]
};
