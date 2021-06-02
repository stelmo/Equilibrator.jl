var documenterSearchIndex = {"docs":
[{"location":"functions/#Function-reference","page":"Function reference","title":"Function reference","text":"","category":"section"},{"location":"functions/","page":"Function reference","title":"Function reference","text":"Modules=[eQuilibrator]\nPages=[\"system.jl\", \"reaction.jl\", \"utils.jl\"]","category":"page"},{"location":"functions/#eQuilibrator.System","page":"Function reference","title":"eQuilibrator.System","text":"struct System\n\nA struct used to reference the equilibrator_api object.\n\n\n\n\n\n","category":"type"},{"location":"functions/#eQuilibrator.System-Tuple{}","page":"Function reference","title":"eQuilibrator.System","text":"System(; ph=7.0, pMg = 3.0, ionic_strength = 0.25M, temperature=298.15K)\n\nA constructor for System. Keyword arguments ionic_strength and temperature have units. Any appropriate unit may be used, the conversion is handled internally. This is typically slow to load, ~ 30 seconds, since all the thermodynamic data needs to be loaded into memory.\n\nExample\n\nusing eQuilibrator\nusing Unitful\n\nsys = System(pH=6.0, pMg = 2.5, ionic_strength=250.0u\"mM\", temperature=30.0u\"°C\")\n\n\n\n\n\n","category":"method"},{"location":"functions/#eQuilibrator.ionic_strength-Tuple{System, Any}","page":"Function reference","title":"eQuilibrator.ionic_strength","text":"ionic_strength(sys::System, x)\n\nSet the ionic strength of sys to x.\n\nExample\n\nionic_strength(sys, 100u\"mM\")\n\n\n\n\n\n","category":"method"},{"location":"functions/#eQuilibrator.ionic_strength-Tuple{System}","page":"Function reference","title":"eQuilibrator.ionic_strength","text":"ionic_strength(sys::System)\n\nGet the ionic strength of sys.\n\nExample\n\nionic_strength(sys)\n\n\n\n\n\n","category":"method"},{"location":"functions/#eQuilibrator.pH-Tuple{System, Any}","page":"Function reference","title":"eQuilibrator.pH","text":"pH(sys::System, x)\n\nSet pH of sys to x.\n\nExample\n\npH(sys, 3.5)\n\n\n\n\n\n","category":"method"},{"location":"functions/#eQuilibrator.pH-Tuple{System}","page":"Function reference","title":"eQuilibrator.pH","text":"pH(sys::System)\n\nGet the pH from sys.\n\nExample\n\npH(sys)\n\n\n\n\n\n","category":"method"},{"location":"functions/#eQuilibrator.pMg-Tuple{System, Any}","page":"Function reference","title":"eQuilibrator.pMg","text":"pMg(sys::System, x)\n\nSet pMg of sys to x.\n\nExample\n\npMg(sys, 1.2)\n\n\n\n\n\n","category":"method"},{"location":"functions/#eQuilibrator.pMg-Tuple{System}","page":"Function reference","title":"eQuilibrator.pMg","text":"pMg(sys::System)\n\nGet pMg from sys.\n\nExample\n\npMg(sys)\n\n\n\n\n\n","category":"method"},{"location":"functions/#eQuilibrator.reset-Tuple{System}","page":"Function reference","title":"eQuilibrator.reset","text":"reset(sys:System)\n\nReset sys back to the default starting state with pH = 7.0, pMg = 3.0, temperature = 298 K and ionic_strength = 0.25 M.\n\n\n\n\n\n","category":"method"},{"location":"functions/#eQuilibrator.temperature-Tuple{System, Any}","page":"Function reference","title":"eQuilibrator.temperature","text":"temperature(sys::System, x)\n\nSet the temperature of sys to x.\n\nExample\n\ntemperature(sys, 40u\"°C\")\n\n\n\n\n\n","category":"method"},{"location":"functions/#eQuilibrator.temperature-Tuple{System}","page":"Function reference","title":"eQuilibrator.temperature","text":"temperature(sys::System)\n\nGet the temperature of sys.\n\nExample\n\ntemperature(sys)\n\n\n\n\n\n","category":"method"},{"location":"functions/#eQuilibrator.dg_prime-Tuple{Any, Any}","page":"Function reference","title":"eQuilibrator.dg_prime","text":"dg_prime(sys, rxn_string; concentrations=Dict{String, Any}(), skip_unbalanced=false, balance_warn=true)\n\nCalculate ΔG' of a reaction described by rxn_string using the settings in sys. Optionally, set the concentrations (abundances) of the species involved in the reaction through concentration. If skip_unbalanced is true then return nothing if the reaction is unbalanced. If balance_warn is false then do not emit a warning when the reaction is unbalanced. Note, concentrations that are smaller than 0.001 mM are capped at 0.001 mM (an eQuilibrator/equilibrator_api) restriction.\n\nExample\n\nsys = System()\n\nrxn_string = \"bigg.metabolite:atp + bigg.metabolite:h2o = bigg.metabolite:adp + bigg.metabolite:pi\"\nconcens = Dict(\"bigg.metabolite:atp\"=>1u\"mM\", \"bigg.metabolite:adp\"=>100u\"μM\", \"bigg.metabolite:pi\"=>0.003u\"M\")\ndg_prime(sys, rxn_string; concentrations=concens)\n\n\n\n\n\n","category":"method"},{"location":"functions/#eQuilibrator.ln_reversibility_index-Tuple{Any, Any}","page":"Function reference","title":"eQuilibrator.ln_reversibility_index","text":"ln_reversibility_index(sys, rxn_string; balance_warn=true, skip_unbalanced=false)\n\nCalculate the log of the reversibility index of a reaction described by rxn_string using settings in sys. If skip_unbalanced is true then return nothing if the reaction is unbalanced. If balance_warn is false then do not emit a warning when the reaction is unbalanced.\n\nExample\n\nsys = System()\n\nrxn_string = \"bigg.metabolite:atp + bigg.metabolite:h2o = bigg.metabolite:adp + bigg.metabolite:pi\"\nln_reversibility_index(sys, rxn_string)\n\n\n\n\n\n","category":"method"},{"location":"functions/#eQuilibrator.physiological_dg_prime-Tuple{Any, Any}","page":"Function reference","title":"eQuilibrator.physiological_dg_prime","text":"physiological_dg_prime(sys, rxn_string; balance_warn=true, skip_unbalanced=false)\n\nCalculate ΔG' at physiological conditions of a reaction described by rxn_string using the settings in sys. If skip_unbalanced is true then return nothing if the reaction is unbalanced. If balance_warn is false then do not emit a warning when the reaction is unbalanced.\n\nExample\n\nsys = System()\n\nrxn_string = \"bigg.metabolite:atp + bigg.metabolite:h2o = bigg.metabolite:adp + bigg.metabolite:pi\"\nphysiological_dg_prime(sys, rxn_string)\n\n\n\n\n\n","category":"method"},{"location":"functions/#eQuilibrator.standard_dg_prime-Tuple{Any, Any}","page":"Function reference","title":"eQuilibrator.standard_dg_prime","text":"standard_dg_prime(sys, rxn_string; balance_warn=true, skip_unbalanced=false)\n\nCalculate ΔG⁰ at standard conditons of a reaction described by rxn_string using the settings in sys. If skip_unbalanced is true then return nothing if the reaction is unbalanced. If balance_warn is false then do not emit a warning when the reaction is unbalanced.\n\nNote, standard conditions means that all concentrations are set at 1 M. \n\nExample\n\nsys = System()\n\nrxn_string = \"bigg.metabolite:atp + bigg.metabolite:h2o = bigg.metabolite:adp + bigg.metabolite:pi\"\nstandard_dg_prime(sys, rxn_string)\n\n\n\n\n\n","category":"method"},{"location":"functions/#eQuilibrator._lower_bound_concentration-Tuple{Any}","page":"Function reference","title":"eQuilibrator._lower_bound_concentration","text":"_lower_bound(x, ϵ=0.001u\"mM\")\n\nCaps the lower bound of a concentration to ϵ.  Return ϵ if x is less than ϵ, otherwise x.\n\n\n\n\n\n","category":"method"},{"location":"functions/#eQuilibrator._parse_reaction_part-Tuple{String, String}","page":"Function reference","title":"eQuilibrator._parse_reaction_part","text":"_parse_reaction_part(str::String, prefix::String)\n\nHelper function for _parse_reaction_string. This function is not exported.\n\n\n\n\n\n","category":"method"},{"location":"functions/#eQuilibrator._parse_reaction_string-Tuple{String, String}","page":"Function reference","title":"eQuilibrator._parse_reaction_string","text":"_parse_reaction_string(str::String, prefix::String)\n\nParse a reaction string and insert the prefix in front of each metabolite. This function is not exported.\n\n\n\n\n\n","category":"method"},{"location":"functions/#eQuilibrator._parse_units-Tuple{Any}","page":"Function reference","title":"eQuilibrator._parse_units","text":"_parse_units(x)\n\nConverts units like kilojoule / mole into kJ/mol. This function is not exported.\n\n\n\n\n\n","category":"method"},{"location":"functions/#eQuilibrator.bigg-Tuple{Any}","page":"Function reference","title":"eQuilibrator.bigg","text":"bigg(str)\n\nReturn a reaction string that has \"bigg.metabolite:\" appended in front of each metabolite. Respects stoichiometric coefficients. \"\" in front of metabolites do not matter, but spaces do matter.  So 13pgm is different from 13 pgm but 13pgm is the same as 13 pgm. A string literal version also exists: bigg\"...\"\n\nSee also kegg, metanetx, [chebi][@ref].\n\nExample\n\nbigg(\"atp + h2o = adp + pi\")\nbigg(\"atp + h2o = adp + 2*pi\")\nbigg(\"atp + h2o = adp + 2 pi\")\n\n\n\n\n\n","category":"method"},{"location":"functions/#eQuilibrator.chebi-Tuple{String}","page":"Function reference","title":"eQuilibrator.chebi","text":"chebi(str)\n\nReturn a reaction string that has \"CHEBI:\" appended in front of each metabolite. Respects stoichiometric coefficients. \"\" in front of metabolites do not matter, but spaces do matter.  So 13pgm is different from 13 pgm but 13pgm is the same as 13 pgm. A string literal version also exists: chebi\"...\"\n\nSee also bigg, metanetx, kegg.\n\nExample\n\nchebi(30616 + 33813 = 456216 + 43474\")\nchebi(30616 + 33813 = 456216 + 2*43474\")\nchebi(30616 + 33813 = 456216 + 2 43474\")\n\n\n\n\n\n","category":"method"},{"location":"functions/#eQuilibrator.kegg-Tuple{String}","page":"Function reference","title":"eQuilibrator.kegg","text":"kegg(str)\n\nReturn a reaction string that has \"kegg:\" appended in front of each metabolite. Respects stoichiometric coefficients. \"\" in front of metabolites do not matter, but spaces do matter.  So 13pgm is different from 13 pgm but 13pgm is the same as 13 pgm. A string literal version also exists: kegg\"...\"\n\nSee also bigg, metanetx, [chebi][@ref].\n\nExample\n\nkegg(\"C00002 + C00001 = C00008 + C00009\")\nkegg(\"C00002 + C00001 = C00008 + 2*C00009\")\nkegg(\"C00002 + C00001 = C00008 + 2 C00009\")\n\n\n\n\n\n","category":"method"},{"location":"functions/#eQuilibrator.metanetx-Tuple{String}","page":"Function reference","title":"eQuilibrator.metanetx","text":"metanetx(str::String)\n\nReturn a reaction string that has \"metanetx.chemical:\" appended in front of each metabolite. Respects stoichiometric coefficients. \"\" in front of metabolites do not matter, but spaces do matter.  So 13pgm is different from 13 pgm but 13pgm is the same as 13 pgm. A string literal version also exists: metanetx\"...\"\n\nSee also bigg, kegg, [chebi][@ref].\n\nExample\n\nmetanetx(\"MNXM3 + MNXM2 = MNXM7 + MNXM9\")\nmetanetx(\"MNXM3 + MNXM2 = MNXM7 + 2 MNXM9\")\nmetanetx(\"MNXM3 + MNXM2 = MNXM7 + 2*MNXM9\")\n\n\n\n\n\n","category":"method"},{"location":"functions/#eQuilibrator.@bigg_str-Tuple{Any}","page":"Function reference","title":"eQuilibrator.@bigg_str","text":"@bigg_str(str)\n\nReturn a reaction string that has \"bigg.metabolite:\" appended in front of each metabolite. Respects stoichiometric coefficients. \"\" in front of metabolites do not matter, but spaces do matter.  So 13pgm is different from 13 pgm but 13pgm is the same as 13 pgm.\n\nSee also kegg, metanetx, [chebi][@ref].\n\nExample\n\nbigg\"atp + h2o = adp + pi\"\nbigg\"atp + h2o = adp + 2*pi\"\nbigg\"atp + h2o = adp + 2 pi\"\n\n\n\n\n\n","category":"macro"},{"location":"functions/#eQuilibrator.@chebi_str-Tuple{String}","page":"Function reference","title":"eQuilibrator.@chebi_str","text":"@chebi_str(str)\n\nReturn a reaction string that has \"chebi:\" appended in front of each metabolite. Respects stoichiometric coefficients. \"\" in front of metabolites do not matter, but spaces do matter.  So 13pgm is different from 13 pgm but 13pgm is the same as 13 pgm.\n\nSee also bigg, metanetx, kegg.\n\nExample\n\nchebi\"30616 + 33813 = 456216 + 43474\"\nchebi\"30616 + 33813 = 456216 + 2*43474\"\nchebi\"30616 + 33813 = 456216 + 2 43474\"\n\n\n\n\n\n","category":"macro"},{"location":"functions/#eQuilibrator.@kegg_str-Tuple{String}","page":"Function reference","title":"eQuilibrator.@kegg_str","text":"@kegg_str(str)\n\nReturn a reaction string that has \"kegg:\" appended in front of each metabolite. Respects stoichiometric coefficients. \"\" in front of metabolites do not matter, but spaces do matter.  So 13pgm is different from 13 pgm but 13pgm is the same as 13 pgm.\n\nSee also bigg, metanetx, [chebi][@ref].\n\nExample\n\nkegg\"C00002 + C00001 = C00008 + C00009\"\nkegg\"C00002 + C00001 = C00008 + 2*C00009\"\nkegg\"C00002 + C00001 = C00008 + 2 C00009\"\n\n\n\n\n\n","category":"macro"},{"location":"functions/#eQuilibrator.@metanetx_str-Tuple{String}","page":"Function reference","title":"eQuilibrator.@metanetx_str","text":"@metanetx_str(str::String)\n\nReturn a reaction string that has \"metanetx.chemical:\" appended in front of each metabolite. Respects stoichiometric coefficients. \"\" in front of metabolites do not matter, but spaces do matter.  So 13pgm is different from 13 pgm but 13pgm is the same as 13 pgm.\n\nSee also bigg, kegg, [chebi][@ref].\n\nExample\n\nmetanetx\"MNXM3 + MNXM2 = MNXM7 + MNXM9\"\nmetanetx\"MNXM3 + MNXM2 = MNXM7 + 2 MNXM9\"\nmetanetx\"MNXM3 + MNXM2 = MNXM7 + 2*MNXM9\"\n\n\n\n\n\n","category":"macro"},{"location":"examples/#Example-usage","page":"Example usage","title":"Example usage","text":"","category":"section"},{"location":"examples/","page":"Example usage","title":"Example usage","text":"The following examples follow closely the example usage  documented in equilibrator_api. Try running these examples!","category":"page"},{"location":"examples/#Basic-ΔG'-calculations","page":"Example usage","title":"Basic ΔG' calculations","text":"","category":"section"},{"location":"examples/","page":"Example usage","title":"Example usage","text":"Load eQuilibrator.jl and Unitful. Then initialize the thermodynamic system as shown below.","category":"page"},{"location":"examples/","page":"Example usage","title":"Example usage","text":"using eQuilibrator\nusing Unitful\n\ntemp = 30u\"°C\"\ni_strength = 150.0u\"mM\"\nph = 7.9\npmg = 2.0\n\nsystem = eQuilibrator.System(pH=ph, pMg=pmg, temperature=temp, ionic_strength=i_strength)","category":"page"},{"location":"examples/","page":"Example usage","title":"Example usage","text":"note: Take care of units\nUnits for temperature and ionic strength are required (pH and pMg are unitless floats). However, any suitable unit may be used, they are internally converted into Kelvin and molar respectively.","category":"page"},{"location":"examples/","page":"Example usage","title":"Example usage","text":"note: Variable names\nWhile it is tempting to name a variable temperature or ionic_strength, these are the names of exported functions. Defining variables with these names  will over-write these functions.","category":"page"},{"location":"examples/","page":"Example usage","title":"Example usage","text":"It is possible to change the state of the system after initialization.","category":"page"},{"location":"examples/","page":"Example usage","title":"Example usage","text":"temperature(system, 298.15u\"K\")\nionic_strength(system, 0.25u\"M\")\npH(system, 7.4)\npMg(system, 3.0)","category":"page"},{"location":"examples/","page":"Example usage","title":"Example usage","text":"An eQuilibrator.jl System has pretty printing:","category":"page"},{"location":"examples/","page":"Example usage","title":"Example usage","text":"system\n# eQuilibrator System\n# Temperature:    298.15 K\n# Ionic strength: 0.25 M\n# pH:             7.4\n# pMg:            3.0","category":"page"},{"location":"examples/","page":"Example usage","title":"Example usage","text":"It is necessary to supply a reaction string.","category":"page"},{"location":"examples/","page":"Example usage","title":"Example usage","text":"rxn_string = \"bigg.metabolite:atp + bigg.metabolite:h2o = bigg.metabolite:adp + bigg.metabolite:pi\"","category":"page"},{"location":"examples/","page":"Example usage","title":"Example usage","text":"After specifying the reaction string, it is a simple matter of calling the appropriate function  to get the ΔG values. ","category":"page"},{"location":"examples/","page":"Example usage","title":"Example usage","text":"physiological_dg_prime(system, rxn_string)\n# -46.26 ± 0.3 kJ mol^-1\n\nstandard_dg_prime(system, rxn_string)\n# -29.14 ± 0.3 kJ mol^-1\n\ndg_prime(system, rxn_string) # equilibrator_api default abundances/concentrations\n# -29.14 ± 0.3 kJ mol^-1\n\nconcens = Dict(\"bigg.metabolite:atp\"=>1u\"mM\", \"bigg.metabolite:adp\"=>100u\"μM\", \"bigg.metabolite:pi\"=>0.005u\"M\")\ndg_prime(system, rxn_string; concentrations=concens) # user specified concentrations\n# -47.98 ± 0.3 kJ mol^-1\n\nln_reversibility_index(system, rxn_string)\n# -12.447 ± 0.082","category":"page"},{"location":"examples/","page":"Example usage","title":"Example usage","text":"tip: Errors are shown using `Measurements.jl`\neQuilibrator  supplies estimates with uncertainties, these are reflected by the use of a ± b with b being the uncertainty, assumed to be one standard deviation here.","category":"page"},{"location":"examples/#Reaction-parsing","page":"Example usage","title":"Reaction parsing","text":"","category":"section"},{"location":"examples/","page":"Example usage","title":"Example usage","text":"It is possible to mix and match metabolite identifiers, exactly like in equilibrator_api, with the associated warnings. In short, the reaction string is directly passed to equilibrator_api, so whatever strings works for it, will also work here.","category":"page"},{"location":"examples/","page":"Example usage","title":"Example usage","text":"atpase_rxn_string_2 = \"kegg:C00002 + CHEBI:15377 = metanetx.chemical:MNXM7 + bigg.metabolite:pi\"\ndg_prime(system, atpase_rxn_string_2)","category":"page"},{"location":"examples/","page":"Example usage","title":"Example usage","text":"Convenience functions for reaction string processing are also made available. These functions insert the appropriate identifier in front of each metabolite while respecting the associated stoichiometric coefficient. Note, these functions insert the exact same prefix before each metabolite. ","category":"page"},{"location":"examples/","page":"Example usage","title":"Example usage","text":"bigg(\"atp + h2o = adp + pi\")\n# \"bigg.metabolite:atp + bigg.metabolite:h2o = bigg.metabolite:adp + 2 bigg.metabolite:pi\"\n\nbigg\"atp + h2o = adp + pi\"\n# \"bigg.metabolite:atp + bigg.metabolite:h2o = bigg.metabolite:adp + 2 bigg.metabolite:pi\"\n\nkegg(\"C00002 + C00001 = C00008 + C00009\")\n# \"kegg:C00002 + kegg:C00001 = kegg:C00008 + kegg:C00009\"\n\nkegg\"C00002 + C00001 = C00008 + C00009\"\n# \"kegg:C00002 + kegg:C00001 = kegg:C00008 + kegg:C00009\"\n\nmetanetx(\"MNXM3 + MNXM2 = MNXM7 + MNXM9\")\n# \"metanetx.chemical:MNXM3 + metanetx.chemical:MNXM2 = metanetx.chemical:MNXM7 + metanetx.chemical:MNXM9\"\n\nmetanetx\"MNXM3 + MNXM2 = MNXM7 + MNXM9\"\n# \"metanetx.chemical:MNXM3 + metanetx.chemical:MNXM2 = metanetx.chemical:MNXM7 + metanetx.chemical:MNXM9\"\n\nchebi(\"30616 + 33813 = 456216 + 43474\")\n# \"CHEBI::30616 + CHEBI::33813 = CHEBI::456216 + CHEBI::43474\"\n\nchebi\"30616 + 33813 = 456216 + 43474\"\n# \"CHEBI::30616 + CHEBI::33813 = CHEBI::456216 + CHEBI::43474\"","category":"page"},{"location":"examples/","page":"Example usage","title":"Example usage","text":"To use this functionality:","category":"page"},{"location":"examples/","page":"Example usage","title":"Example usage","text":"r_str = bigg\"atp + h2o = adp + pi\"\ndg_prime(system, r_str)\n# -29.14 ± 0.3 kJ mol^-1","category":"page"},{"location":"installation/#Installation-instructions","page":"Installation","title":"Installation instructions","text":"","category":"section"},{"location":"installation/","page":"Installation","title":"Installation","text":"eQuilibrator.jl uses PyCall and Conda.jl to access equilibrator_api functions. First, ensure that you have installed both PyCall and Conda.jl using Julia's package manager:","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"] add PyCall\n] add Conda","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"Next, install equilibrator_api through Conda.jl:","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"using Conda\n\nConda.add(\"equilibrator_api\")","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"Then test if you can import equilibrator_api using PyCall:","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"using PyCall\n\neq = pyimport(\"equilibrator_api\")","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"If no errors occur, and the last command return something like PyObject <module 'equilibrator_api' from...  then you will be able to use eQuilibrator.jl after installing it:","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"] add https://github.com/stelmo/eQuilibrator.jl.git","category":"page"},{"location":"#eQuilibrator.jl","page":"Home","title":"eQuilibrator.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"eQuilibrator.jl is a lightweight interface to the Python package equilibrator_api, which provides a programmatic way to make use of the functionality of eQuilibrator. This is particularly useful when one needs access to thermodynamic information about reactions or compounds. ","category":"page"},{"location":"#Index","page":"Home","title":"Index","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pages = [\"installation.md\", \"examples.md\", \"functions.md\"]\nDepth = 1","category":"page"}]
}
