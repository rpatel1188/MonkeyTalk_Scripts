Vars * define Q A B C %thinktime=2000
Table _tableView SelectIndex 1 %thinktime=2000
UILabel * Verify ${Q} %thinktime=2000
UILabel * Verify ${A} %thinktime=2000
UILabel * Verify ${B} %thinktime=2000
UILabel * Verify ${C} %thinktime=2000
TLChoiceButton "The Morgue" Tap
UILabel * Verify ${A} %thinktime=2000
Button Trivia Tap 40 26 %thinktime=5000
Table _tableView SelectIndex 2 %thinktime=3000
UILabel * Verify ${Q} %thinktime=3000
UILabel * Verify ${A} %thinktime=2000
UILabel * Verify ${B} %thinktime=2000
UILabel * Verify ${C} %thinktime=2000
TLChoiceButton "It's a Small World" Tap
UILabel * Verify ${B} %thinktime=2000
Button Trivia Tap 40 26 %thinktime=2000