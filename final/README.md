# Osu! BeatMap Recommender

Gives Osu! beatmap recommendations based on given top play, skill set, and modifiers.

## Variables

* topPlay (Number): Given top score, ranging from 0 to 1000.
* skillSet (String): The skillset that a player is most comfortable with, or wants to focus on practicing. (List of Skills: Aim, Speed, Stamina, Hybrid, Consistency)
* modifers (Array): The difficulty modifier that a player wants to practice with. (No Mod, Hidden, Hardrock, Doubletime)
* [skill]Maps (Object Array): Array of objects which holds maps relevant to the given skill. (Object Values: beatMapName, beatMapID, starRating)
* difficultyEst (Number): The estimated difficulty that a player can play based on their given top play.
* highAccRelevance (Boolean): Estimates if a player can achieve >97% on a given beatmap and returns true if so.

## Steps in the decision making process

* topPlay will be used to estimate the difficulty (difficultyEst) used when recommending maps (i;e if topPlay = 300 then difficultyEst = 6)
* difficultyEst will be used to loop through the [skill]Maps array (given the relevant skillSet) and a find maps which are within a 0.5 difficulty range >difficultyEst
* If highAccRelevance is set to true then the difficultyEst is true then the difficulty range will be shifted lower by 0.25 (If difficultyEst = 6 then the range will be 5.75-6.25)
* The app will choose three beatmaps at random given the prior conditions and output them for the player to choose and play.

#### How Modifiers are used in the process:
* Hidden will add an additional range of 0.25 below the difficultyEst (If difficultyEst = 6 then the range will be 5.75-6.5)
* Hardrock will increase the difficulty of the maps in the [skill]Maps array by a factor of 1.075
* Doubletime will increase the difficulty of the maps in the [skill]Maps array by a factor of 1.45

#### as for highAccRelevance, it will be set to true for any of the following conditions:
* The Hidden or Hardrock mods are enabled.
* The chosen skill set is either Aim, Hybrid or Consistency.
* difficultyEst is greater than 7.

## Output
#### Note: Three beatmaps will be outputted, two with the desired mods and one map with No Mod conditions.

* The beatmap and difficulty name
* The modifiers to be used the given beatmap
* The re-factored difficulty of the given beatmap
* The target accuracy for the given beatmap
* The osu.ppy.sh link (or ID) to the given beatmaps page