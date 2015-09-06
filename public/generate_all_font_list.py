import json, os, sys, pprint

path = os.path.dirname(os.path.abspath(__file__))

allFonts = []

for dirname, dirs, filenames in os.walk(os.path.join(path, "generated_files")):
	for f in filenames:
		if f.endswith(".json"):
			with open(os.path.join(path, "generated_files", f)) as font_file:
				data = json.load(font_file)
				for item in data:
					allFonts.append(item)


pprint.pprint(len(allFonts))

sortedAllFonts = sorted(allFonts, key= lambda k: k["name"])

with open(os.path.join(path,"generated_files","all-fonts.json"),"w") as c:
	json.dump(sortedAllFonts, c)