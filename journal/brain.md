# /Users/dionedge/dev/brain/journal/brain/
## brain_rules.md

### format
+ All files have the path:
  "/Users/dionedge/dev/brain/journal"
+ `# project (folder)`
+ `## Card_Name.md`
+ `### Task`
+ `#### Subtask`
+  or 
+ `+ [ ] Subtask``
+ metadata separator: `::`
+ card separator: `===`

### priority
+ ☢️ #urgent 
+ ⚠️ #high 
+ ☑️ #normal 
+ 🐌 #low

===

# brain/
## card_template.md
```
<!--
:open file folder: project::
:file cabinet: sourceFile:: 
:key: id::
:spades suit: card::
:memo: description::  
:link symbol: dependency::
:service dog: priority:: ☑️ #normal
:cookie: kudos:: true
:alien: assignee:: @wrenchchat
:tshirt:: size:: S
:repeat symbol: repeat:: Daily
:stopwatch: estimate:: 1 hour
:alarm_clock: created:: now()
:alarm_clock: start::
:alarm_clock: due::
:card_index: status:: BACKLOG
:label tag: tags:: #build, #docs 
-->
```
===
# brain/
## metadata.md
```
card:: ## ♠️ {card} 
task:: ### 💥 [ ] {task}
subtask:: ##### 🧨 [ ] {subtask}
📝 notes::
⏰ updated::
⏰ remind::
⏰ end::
⏱️ spent::
↕️ repo::
🐍 python::
⚙️ API::
🧠 LLM:: ASSIGNED
+ [x] 🐐 Claude 3.7 Sonnet
+ [ ] 💬 GPT-4
+ [ ] ♊️ Gemini 2
+ [x] 🐳 Deepseek R1
+ [x] 🤙🏽 LM Studio
🤖 tokens::
💰 cost::
```
===
# brain/
## tags.md
```
+ #books
+ #BLOCKED
+ #bug
+ #build
+ #C.R.E.A.M
+ #clean
+ #CX
+ #delete
+ #docs
+ #dupe
+ #enhancement
+ #feature
+ #focus
+ #kudos
+ #MVP
+ #new
+ #refactor
+ #techdebt
+ #test
```
===
# brain/
## fave_emojis.md
```
⏱️ :alarm clock:
👶🏽 :baby:
☑️ :ballot box with check:
🧠 brain
✅ :check mark symbol:
🍪 :cookie:
⬇️ :down arrow:
💥 :explosion:
🗄️ :file cabinet:
🧨 :firecracker:
⚙️ :gear:
🐐 :goat:
🔑 :key:
🏷️ :label tag:
🐞 :ladybug:
📒 :ledger:
⚡️ :lightning bolt:
🔗 :link symbol:
🔬 :microscope:
𝓝 :mathematical bold script capital n:
📝 :memo:
🛑 :octagonal sign:
📂 :open file folder:
⏸️ :pause symbol:
🚨 :police car’s light:
☢️ :radioactive:
🔁 :repeat symbol:
🐕‍🦺 :service dog:
🐌 :snail:
🐍 :snake:
♠️ :spades suit:
⏱️ :stopwatch:
🦄 :unicorn:
↕️ :up-down arrow:
⚠️ :warning:
🐳 :whale:
```
===
# brain/
## status.md
```
lists:
  BACKLOG:
    description: Items to be processed
    color: "#A5A5A5"
    hex_name: pastel_gray
  PLANNING:
    description: In planning phase
    color: "#74C3D1"
    hex_name: pastel_cyan
  NOTE:
    description: General notes and documentation
    color: "#FFE599"
    hex_name: pastel_yellow
  TODO:
    description: Ready to work on
    color: "#A4C2F4"
    hex_name: pastel_blue
  DOING:
    description: Currently in progress
    color: "#A1D9A0"
    hex_name: pastel_green
  DONE:
    description: Completed tasks
    color: "#B5A0E3"
    hex_name: pastel_purple
  REVIEW:
    description: Needs review
    color: "#F4A6C0"
    hex_name: pastel_pink
  CODIFY:
    description: To be codified
    color: "#F6B786"
    hex_name: pastel_orange
  TECH_DEBT:
    description: Technical debt to address
    color: "#E69999"
    hex_name: pastel_red
```
===