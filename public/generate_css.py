import os, sys, glob, pprint, json

# Folder must contain fonts of same type - either otf or ttf

path = os.path.dirname(os.path.abspath(__file__))

fontType = sys.argv[1]

fonts = []

for dirname, dirs, filenames in os.walk(os.path.join(path, "fonts", fontType)):
	for d in dirs:
		fontDict = {}
		#print "FOLDER: " + d
		fontDict["name"] = d
		fontDict["class"] = "font-"+d
		fontDict["styles"] = ["regular"]
		for filename in os.listdir(os.path.join(path,"fonts", fontType,d)):
			if filename.endswith(".txt"):
				#print "GOT LINK"
				with open(os.path.join(path,"fonts",fontType,d,filename),"r") as f:
					fontDict["link"] = f.read().strip()

			if filename.endswith(".ttf") or filename.endswith(".otf"):
				file_parts = filename.split(".")
				ending = file_parts[1]
				fontDict["ending"] = ending
				rest = file_parts[0]
				variant = rest.split("_")
				if len(variant)>1:
					fontDict["styles"].append(variant[1])
					#print "VARIANT: " + variant[1]

		fonts.append(fontDict)

#pprint.pprint(fonts)

with open(os.path.join(path,"generated_files",fontType+".json"),"w") as c:
	json.dump(fonts, c)
	#for item in fonts:
		#c.writelines("%s,\n" % item)

css_file = ""

for font in fonts:
	for style in font["styles"]:
		if style == 'regular':
			fontFace = """@font-face{
	font-family: '%s';
	src: url('/fonts/%s/%s/%s.%s');
}""" % (font["name"], fontType, font["name"],font["name"], font["ending"])

			fontClass = """.%s{
	font-family: '%s';
}""" % (font["class"], font["name"])
		else:
			fontFace = """@font-face{
	font-family: '%s-%s';
	src: url('/fonts/%s/%s/%s_%s.%s');
}""" % (font["name"],style, fontType, font["name"],font["name"], style, font["ending"])

			fontClass = """.%s-%s{
	font-family: '%s-%s';
}""" % (font["class"], style, font["name"], style)
		css_file += fontFace
		css_file += "\n\n"
		css_file += fontClass
		css_file += "\n\n"

with open(os.path.join(path,"generated_files",fontType+".css"),"w") as f:
	f.write(css_file)






