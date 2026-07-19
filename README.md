# Memory Archive Portfolio
Development Specification for Codex
Memory Archive Portfolio
Codex Development Specification

1. Overall Concept
Website Name
Memory Archive
Core Concept
This portfolio is designed as a personal digital archive.
The visitor is not simply reading a portfolio.
They are exploring memories, experiences and creative records.
The website combines:
Dreamcore atmosphere
Y2K computer interface
Pixel elements
Retro desktop UI
Japanese minimal layout
Visual keywords:
warm
nostalgic
creative
archive
digital memory
soft technology

2. Global Design System
Canvas
Desktop first:
1440px width
responsive height

Background
Main:
#FDF6F2

Color Palette
Pink:
#F7D8DC
Blue:
#CFE8FF
Purple:
#D6C6FF
Green:
#A8D59B
Yellow:
#FFE7A3

UI Style
All sections should use:
rounded window
soft shadow
glass effect
pixel decoration
floating elements
Border:
1px solid #E8BCC1
Radius:
16px-24px

3. Character System
nini
Location:
Assets / Characters / nini
Role:
Main portfolio guide character.
Usage:
homepage introduction
archive exploration
small interaction decoration
Animation:
idle floating

kuro
Location:
Assets / Characters / kuro
Role:
Companion character.
Usage:
homepage
project transition
contact page

4. Page Structure
01_Arrival
Image:
Design Preview/
01_Arrival.png
Purpose
Landing page.
Layout
Full screen.
Elements:
sky / archive room background
memory.zip title
nini + kuro
enter button
Interaction:
Click:
ENTER ARCHIVE
↓
02_ArchiveDesktop
Transition:
fade + zoom

02_ArchiveDesktop
Image:
02_ArchiveDesktop.png
Purpose:
Main navigation desktop.
Layout:
Retro computer desktop.
Folders:
about_me
projects
strategy
copywriting
creative
contact
Interaction:
Click folder:
open corresponding page.

03_AboutMe
Image:
03_AboutMe.png
Structure:
Three sections.
Hero
Content:
Name
Position
Years experience
Education
Contact
Style:
Personal introduction window.

Journey
Vertical timeline.
Content:
Experience timeline.
Interaction:
scroll reveal.

Tags
Floating keywords:
Example:
Creative
Strategy
Storytelling
Brand
Ideas
Animation:
floating movement.

04_Project01
Image:
04_Project01.png

05_Project02
Image:
05_Project02.png

06_Project03
Image:
06_Project03.png

07_Project04
Image:
07_Project04.png
Project Template
Each project contains:
Cover
Images:
Assets/projectXX/
Background
Challenge
Strategy
Execution
Result
Interaction:
Vertical scrolling.
Next Project button:
↓
next project page

08_Strategy
Image:
08_Strategy.png
Purpose:
方案策划能力展示。
Layout:
Case cards.
Each case:
Strategy image

+
Thinking explanation
Example:
Case 01

春节营销方案

[image]

How I Think:

用户洞察
场景分析
传播路径
Interaction:
Card hover:
enlarge
shadow

09_Copywriting
Image:
09_Copywriting.png
Purpose:
文案能力展示。
Important:
This page uses switching interaction.
Layout:
Single screen.
Left:
Category navigation
Example:
Brand Copy
Script
Social Media
Campaign
Right:
Content preview.
Interaction:
Click category:
change content.
Use:
Smart Animate
300ms
Ease Out

10_Copywriting02
Image:
10_Copywriting02.png
11_Copywriting03
Image:
11_Copywriting03.png
12_Copywriting04
Image:
12_Copywriting04.png
These are content states.
Do not create new pages.
They are copywriting switching states.

13_Creative
Image:
13_Creative.png
Purpose:
Creative ability.
Layout:
Three creative cards.
Each card:
Main image
Floating tags
Example:
Floating tags:
Insight

Visual

Idea

Concept
Interaction:
Hover card:
move up
shadow
tags appear

14_Contact
Image:
14_Contact.png
Purpose:
Ending page.
Content:
Let's create something meaningful together
Information:
Phone:
xxx
Wechat:
Click QR window.
Interaction:
Wechat button:
click
↓
open QR modal
Animation:
fade in
Email:
click:
open mail

5. Assets Mapping
Project Images
Example:
Assets/project01/

project01_cover_01.png

project01_cover_02.png

project01_execution_01.png

...
Use automatically according to naming.

Strategy
Assets/strategy/

Copywriting
Assets/copywriting/

Creative
Assets/creative/

6. Development Priority
Please build in this order:
Phase 1
Structure:
1.Arrival
2.Desktop Navigation
3.About
4.Projects
Phase 2
Creative modules:
1.Strategy
2.Copywriting
3.Creative
Phase 3
Interaction:
1.Folder opening animation
2.Page transitions
3.Character animation

7. Important Development Notes
Do NOT redesign.
Follow Figma screenshots exactly.
Priority:
1.Layout accuracy
2.Interaction
3.Animation
4.Responsive
## Design Reference
Figma:
https://www.figma.com/design/uiGL0BTMVHzfbdvo9Z6E7E/Memory-Archive-Portfolio?node-id=1-4&t=S3o87wdY9a2oiIDW-0
Use only as additional reference.
The Design Preview folder is the primary visual reference.