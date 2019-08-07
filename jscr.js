var labels = {
	'year' : ['-20000', '-16000', '-12000', '-8000', '-4000', '0', '4000'],
	'degree' : [],	
}

var temps = {
	'marcott' : [-0.60, -0.10, -0.26, -0.26, -0.19, -0.16, -0.15, -0.25, -0.22, -0.22, -0.37, -0.35, -0.37, -0.35, -0.33, -0.32, -0.30, -0.29, -0.27, -0.24, -0.22, -0.25, -0.23, -0.23, -0.21, -0.28, -0.26, -0.18, -0.17, -0.16, -0.13, -0.12, -0.13, -0.14, -0.12, -0.13, -0.20, -0.19, -0.18, -0.14, -0.11, -0.10, -0.09, -0.09, -0.09, -0.08, -0.08, -0.08, -0.07, -0.05, -0.06, -0.05, -0.04, -0.03, -0.02, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, -0.02, -0.02, -0.02, -0.02, -0.02, -0.03, -0.02, -0.02, -0.02, -0.02, -0.02, -0.07, -0.07, -0.08, -0.07, -0.06, -0.07, -0.07, -0.07, -0.07, -0.07, -0.07, -0.07, -0.07, -0.07, -0.07, -0.07, -0.06, -0.06, -0.06, -0.06, -0.06, -0.06, -0.06, -0.06, -0.06, -0.06, -0.06, -0.05, -0.05, -0.04, -0.03, -0.03, -0.02, -0.02, -0.02, -0.01, -0.01, -0.01, 0.00, 0.00, 0.01, 0.01, 0.01, 0.01, 0.02, 0.02, 0.02, 0.02, 0.03, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.05, 0.05, 0.05, 0.05, 0.06, 0.06, 0.06, 0.06, 0.06, 0.05, 0.06, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.04, 0.04, 0.03, 0.03, 0.03, 0.03, 0.04, 0.04, 0.05, 0.05, 0.06, 0.07, 0.08, 0.09, 0.09, 0.10, 0.10, 0.10, 0.10, 0.11, 0.11, 0.11, 0.11, 0.11, 0.12, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.17, 0.18, 0.18, 0.18, 0.18, 0.18, 0.19, 0.19, 0.19, 0.19, 0.19, 0.19, 0.20, 0.20, 0.21, 0.21, 0.21, 0.22, 0.22, 0.23, 0.24, 0.24, 0.25, 0.25, 0.25, 0.26, 0.26, 0.26, 0.25, 0.25, 0.25, 0.24, 0.24, 0.25, 0.25, 0.25, 0.26, 0.26, 0.26, 0.27, 0.27, 0.28, 0.28, 0.28, 0.28, 0.28, 0.29, 0.29, 0.30, 0.31, 0.31, 0.31, 0.31, 0.32, 0.32, 0.33, 0.33, 0.34, 0.35, 0.35, 0.35, 0.36, 0.36, 0.36, 0.37, 0.37, 0.38, 0.38, 0.38, 0.39, 0.39, 0.39, 0.39, 0.39, 0.39, 0.40, 0.40, 0.40, 0.40, 0.39, 0.39, 0.39, 0.39, 0.39, 0.39, 0.39, 0.39, 0.38, 0.38, 0.38, 0.39, 0.39, 0.39, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38, 0.37, 0.37, 0.37, 0.37, 0.36, 0.36, 0.36, 0.36, 0.35, 0.35, 0.35, 0.34, 0.34, 0.34, 0.35, 0.35, 0.36, 0.37, 0.37, 0.37, 0.38, 0.38, 0.38, 0.38, 0.38, 0.37, 0.37, 0.37, 0.37, 0.36, 0.36, 0.36, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.36, 0.36, 0.36, 0.37, 0.37, 0.37, 0.38, 0.39, 0.40, 0.40, 0.41, 0.41, 0.42, 0.42, 0.43, 0.43, 0.43, 0.44, 0.44, 0.45, 0.45, 0.46, 0.46, 0.47, 0.47, 0.47, 0.47, 0.46, 0.46, 0.45, 0.44, 0.44, 0.43, 0.43, 0.42, 0.42, 0.42, 0.41, 0.41, 0.40, 0.39, 0.39, 0.38, 0.37, 0.37, 0.37, 0.37, 0.37, 0.37, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38, 0.37, 0.37, 0.36, 0.36, 0.36, 0.36, 0.36, 0.35, 0.35, 0.36, 0.36, 0.36, 0.37, 0.37, 0.37, 0.38, 0.38, 0.38, 0.37, 0.37, 0.36, 0.36, 0.36, 0.36, 0.36, 0.35, 0.34, 0.34, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39, 0.40, 0.40, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.41, 0.40, 0.40, 0.40, 0.40, 0.39, 0.39, 0.39, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38, 0.37, 0.37, 0.37, 0.37, 0.37, 0.36, 0.36, 0.36, 0.36, 0.36, 0.37, 0.37, 0.37, 0.37, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38, 0.37, 0.37, 0.36, 0.36, 0.35, 0.34, 0.34, 0.33, 0.32, 0.31, 0.31, 0.31, 0.31, 0.30, 0.29, 0.29, 0.28, 0.27, 0.27, 0.26, 0.25, 0.25, 0.25, 0.24, 0.24, 0.24, 0.23, 0.23, 0.23, 0.23, 0.22, 0.22, 0.21, 0.21, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.19, 0.18, 0.17, 0.16, 0.14, 0.12, 0.11, 0.09, 0.08, 0.07, 0.05, 0.04, 0.02, 0.01, 0.00, -0.02, -0.03, -0.03, -0.03, -0.04, -0.05, -0.05, -0.06, -0.07, -0.08, -0.08, -0.08, -0.09, -0.09, -0.10, -0.11, -0.12, -0.12, -0.13, -0.13, -0.14, -0.15, -0.17, -0.18, -0.20, -0.22],
	'marcottUnc' : [0.28, 0.26, 0.24, 0.23, 0.22, 0.21, 0.20, 0.19, 0.20, 0.20, 0.20, 0.20, 0.19, 0.18, 0.17, 0.17, 0.17, 0.16, 0.17, 0.17, 0.17, 0.17, 0.16, 0.16, 0.16, 0.16, 0.16, 0.16, 0.16, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.13, 0.13, 0.14, 0.14, 0.14, 0.14, 0.13, 0.13, 0.14, 0.14, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.14, 0.14, 0.14, 0.13, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.14, 0.14, 0.14, 0.13, 0.14, 0.14, 0.13, 0.13, 0.13, 0.13, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.14, 0.14, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.11, 0.11, 0.11, 0.11, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.11, 0.11, 0.11, 0.11, 0.11, 0.11, 0.12, 0.12, 0.12, 0.12, 0.13, 0.13, 0.13, 0.13, 0.13, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.13, 0.13, 0.14, 0.14, 0.14, 0.14, 0.14, 0.13, 0.14, 0.14, 0.14, 0.14, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.12, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.13, 0.13, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.13, 0.13, 0.13, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.13, 0.14, 0.14, 0.14, 0.14, 0.13, 0.13, 0.13, 0.13, 0.14, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.14, 0.14, 0.14, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.14, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.13, 0.13, 0.14, 0.14, 0.14, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.14, 0.14, 0.14, 0.14, 0.13, 0.13, 0.14, 0.14, 0.14, 0.14, 0.14, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.16, 0.16, 0.16, 0.16, 0.16, 0.16, 0.16, 0.16, 0.16, 0.16, 0.15, 0.15, 0.15, 0.15, 0.16, 0.16, 0.16, 0.16, 0.16, 0.16, 0.16, 0.16, 0.16, 0.16, 0.16, 0.16, 0.16, 0.16, 0.16, 0.17, 0.17, 0.17, 0.17, 0.17, 0.17, 0.17, 0.17, 0.17, 0.17, 0.17, 0.17, 0.17, 0.17],
	'shakun' : [0.13, 0.14, 0.14, 0.16, 0.16, 0.16, 0.16, 0.18, 0.18, 0.16, 0.14, 0.12, 0.12, 0.12, 0.11, 0.12, 0.10, 0.08, 0.12, 0.15, 0.16, 0.16, 0.16, 0.16, 0.17, 0.15, 0.15, 0.14, 0.14, 0.14, 0.12, 0.11, 0.10, 0.08, 0.06, 0.02, -0.02, -0.06, -0.10, -0.10, -0.10, -0.13, -0.17, -0.24, -0.32, -0.39, -0.48, -0.54, -0.62, -0.70, -0.78, -0.87, -1.05, -1.16, -1.25, -1.30, -1.39, -1.42, -1.48, -1.56, -1.65, -1.70, -1.70, -1.68, -1.63, -1.60, -1.58, -1.53, -1.48, -1.43, -1.43, -1.46, -1.47, -1.50, -1.56, -1.60, -1.62, -1.64, -1.69, -1.76, -1.85, -1.98, -2.11, -2.22, -2.31, -2.38, -2.42, -2.46, -2.49, -2.52, -2.56, -2.60, -2.63, -2.67, -2.70, -2.74, -2.78, -2.82, -2.86, -2.90, -2.94, -2.98, -3.02, -3.05, -3.08, -3.10, -3.15, -3.20, -3.21, -3.21, -3.22, -3.23, -3.24, -3.25, -3.27, -3.28, -3.31, -3.33, -3.34, -3.35, -3.36, -3.38, -3.39, -3.42, -3.44, -3.43, -3.42, -3.43, -3.45, -3.44, -3.42, -3.40, -3.40, -3.41, -3.43, -3.44, -3.44, -3.46, -3.46, -3.47, -3.48, -3.49, -3.50, -3.51, -3.52, -3.52, -3.53, -3.54, -3.55, -3.57, -3.58, -3.58, -3.58, -3.58, -3.56, -3.55 ],
	'shakunUnc' : [0.12 , 0.11 , 0.11 , 0.11 , 0.11 , 0.11 , 0.11 , 0.10 , 0.10 , 0.10 , 0.11 , 0.10 , 0.10 , 0.10 , 0.11 , 0.10 , 0.11 , 0.10 , 0.10 , 0.10 , 0.11 , 0.10 , 0.11 , 0.10 , 0.10 , 0.10 , 0.10 , 0.10 , 0.10 , 0.11 , 0.11 , 0.11 , 0.11 , 0.11 , 0.11 , 0.11 , 0.11 , 0.10 , 0.11 , 0.11 , 0.11 , 0.11 , 0.11 , 0.11 , 0.11 , 0.11 , 0.11 , 0.12 , 0.12 , 0.12 , 0.12 , 0.13 , 0.13 , 0.13 , 0.13 , 0.12 , 0.12 , 0.12 , 0.12 , 0.12 , 0.13 , 0.13 , 0.13 , 0.13 , 0.13 , 0.13 , 0.13 , 0.13 , 0.12 , 0.12 , 0.12 , 0.12 , 0.12 , 0.12 , 0.12 , 0.13 , 0.13 , 0.13 , 0.14 , 0.15 , 0.15 , 0.15 , 0.16 , 0.15 , 0.14 , 0.14 , 0.13 , 0.13 , 0.12 , 0.13 , 0.12 , 0.12 , 0.12 , 0.13 , 0.12 , 0.12 , 0.13 , 0.13 , 0.13 , 0.13 , 0.13 , 0.13 , 0.13 , 0.13 , 0.13 , 0.13 , 0.14 , 0.14 , 0.14 , 0.13 , 0.13 , 0.13 , 0.13 , 0.13 , 0.13 , 0.13 , 0.13 , 0.12 , 0.12 , 0.12 , 0.12 , 0.12 , 0.12 , 0.12 , 0.13 , 0.13 , 0.12 , 0.12 , 0.12 , 0.12 , 0.12 , 0.12 , 0.12 , 0.12 , 0.12 , 0.12 , 0.12 , 0.12 , 0.12 , 0.12 , 0.12 , 0.12 , 0.12 , 0.12 , 0.12 , 0.13 , 0.12 , 0.12 , 0.12 , 0.12 , 0.12 , 0.12 , 0.12 , 0.13 , 0.13 , 0.13],
	'hadcrut' : [-0.375818182, -0.221818182, -0.226454545, -0.270727273, -0.246454545, -0.267090909, -0.358090909, -0.458636364, -0.464090909, -0.286636364, -0.342454545, -0.393181818, -0.506272727, -0.278181818, -0.481272727, -0.274545455, -0.244727273, -0.312090909, -0.233909091, -0.261818182, -0.273181818, -0.328909091, -0.232000000, -0.307181818, -0.375545455, -0.412000000, -0.385090909, -0.075454545, 0.031363636, -0.235545455, -0.230272727, -0.208272727, -0.216454545, -0.293454545, -0.404727273, -0.388454545, -0.368636364, -0.421090909, -0.311090909, -0.175454545, -0.422454545, -0.341727273,  -0.459545455, -0.477636364, -0.411636364, -0.396272727, -0.193545455, -0.212181818, -0.410636364, -0.289090909, -0.200090909, -0.269545455, -0.413272727, -0.482909091, -0.529000000, -0.382818182, -0.295272727, -0.477545455, -0.524363636, -0.537818182, -0.498181818, -0.555454545, -0.451000000, -0.440454545, -0.259636364, -0.167000000, -0.399363636, -0.483000000, -0.343727273, -0.284636364, -0.252545455, -0.192000000, -0.310090909, -0.277272727, -0.301545455, -0.221545455, -0.114545455, -0.215090909, -0.213363636, -0.351454545, -0.140181818, -0.089818182, -0.138090909, -0.275090909, -0.128545455, -0.177363636, -0.144272727, -0.026636364, -0.006545455, -0.057090909, 0.016727273, 0.016454545, -0.024090909, -0.004636364, 0.147636364, 0.031545455, -0.069181818, -0.041090909, -0.038272727, -0.077363636, -0.175909091, -0.048636364, 0.032818182, 0.100727273, -0.128818182, -0.185363636, -0.260909091, -0.001090909, 0.050181818, 0.016818182, -0.049636364, 0.038454545, 0.017090909, 0.049545455, -0.223545455, -0.141090909, -0.072454545, -0.075636364, -0.113181818, 0.029090909, -0.028272727, -0.183272727, -0.067181818, 0.064181818, -0.210727273, -0.145181818, -0.237636364, 0.046545455, -0.060909091, 0.058181818, 0.093090909, 0.141545455, 0.011545455, 0.190636364, -0.014000000, -0.028727273, 0.046636364, 0.186272727, 0.201000000, 0.121363636, 0.292181818, 0.253363636, 0.102272727, 0.143272727, 0.204181818, 0.323545455, 0.178727273, 0.392272727, 0.530545455, 0.300909091, 0.294909091, 0.438363636, 0.493636364, 0.504181818, 0.445090909, 0.540363636, 0.495363636, 0.483818182, 0.388181818, 0.494545455, 0.547727273, 0.408454545, 0.450363636, 0.468818182],
	'a1b' : [0.9, 0.93, 0.95, 1.01, 1.1, ,1.19, 1.2, 1.24, 1.27, 1.3, 1.35, 1.4, 1.43, 1.47, 1.495, 1.5, 1.55, 1.62, 1.67, 1.7, 1.75, 1.81, 1.85, 1.9, 2.0, 2.05, 2.07, 2.1, 2.15, 2.17, 2.2, 2.25, 2.29, 2.3, 2.35, 2.37, 2.4, 2.42, 2.45, 2.48, 2.5, 2.54, 2.59, 2.6, 2.65, 2.68, 2.7, 2.72, 2.75, 2.8]
}	

var abstracts = {
	'mar' : 'Surface temperature reconstructions of the past 1500 years suggest that recent warming is unprecedented in that time. Here we provide a broader perspective by reconstructing regional and global temperature anomalies for the past 11,300 years from 73 globally distributed records. Early Holocene (10,000 to 5000 years ago) warmth is followed by ~0.7°C cooling through the middle to late Holocene (<5000 years ago), culminating in the coolest temperatures of the Holocene during the Little Ice Age, about 200 years ago. Current global temperatures of the past decade have not yet exceeded peak interglacial values but are warmer than during ~75% of the Holocene temperature history.',
	'shak' : 'Here we construct a record of global surface temperature from 80 proxy records and show that temperature is correlated with and generally lags CO2 during the last (that is, the most recent) deglaciation. These observations, together with transient global climate model simulations, support the conclusion that an antiphased hemispheric temperature response to ocean circulation changes superimposed on globally in-phase warming driven by increasing CO2 concentrations is an explanation for much of the temperature change at the end of the most recent ice age.',
	'had' : 'Climate diagnostics computed from the gridded data set broadly agree with those of other global near-surface temperature analyses. Fitted linear trends in temperature anomalies are approximately 0.07°C/decade from 1901 to 2010 and 0.17°C/decade from 1979 to 2010 globally. Northern/southern hemispheric trends are 0.08/0.07°C/decade over 1901 to 2010 and 0.24/0.10°C/decade over 1979 to 2010.',
	'a1bB' : 'The A1 storyline and scenario family describes a future world of very rapid economic growth, global population that peaks in mid-century and declines thereafter, and the rapid introduction of new and more efficient technologies. Major underlying themes are convergence among regions, capacity building and increased cultural and social interactions, with a substantial reduction in regional differences in per capita income. '
}

var CHART_WIDTH = 700,
	CHART_HEIGHT = 500
	CHART_Y_OFFSET = 50,
	CHART_X_OFFSET = 50;
	
var canv = document.getElementById("myCanvas"),
	ctx = canv.getContext("2d"),
	btnAn = document.getElementById("aniBtn"),
	btnStp = document.getElementById("stepBtn"),
	btnHad = document.getElementById("hadBtn"),
	btnA = document.getElementById("aBtn");
	
drawChart();
function drawChart(){

	ctx.lineWidth = 1;
	ctx.strokeStyle = "black";	
	ctx.beginPath();
	// rec for chart boundary
	ctx.rect(CHART_X_OFFSET, CHART_Y_OFFSET, CHART_WIDTH, CHART_HEIGHT);
	ctx.rect(CHART_X_OFFSET+CHART_WIDTH+3, CHART_Y_OFFSET, canv.width-CHART_WIDTH-60, canv.height-(2*CHART_Y_OFFSET));
	ctx.stroke();
	
	ctx.fillStyle = "black";
	ctx.font = "20px Helvetica";
	ctx.fillText("Year (BC/AD)", CHART_WIDTH/2, canv.height-3);
	
		var numYears = labels['year'].length-1,	x_jump = CHART_WIDTH / numYears, i = 0;
	for (var j = CHART_X_OFFSET-25; j < CHART_WIDTH+100; j += x_jump){		
		ctx.fillText(labels['year'][i] , j ,canv.height-CHART_Y_OFFSET+20);	
		i++;
	}	
	
		var degTicks = 8, deg = 3, l = 0;
		var degSpace = (CHART_HEIGHT+CHART_Y_OFFSET)/degTicks;
	for (var k = CHART_Y_OFFSET+20; l < degTicks; k+=degSpace){
		ctx.fillText(deg, CHART_X_OFFSET-20, k);
		deg--;
		l++;
	}
	ctx.save();
	ctx.translate(15,canv.height/2+50);
	ctx.rotate(-0.5*Math.PI);
	
	var rText = 'Temp Anomaly [C]';
	ctx.fillText(rText , 0, 0);
	ctx.restore();	
}

var counter = temps['shakun'].length;
var counter2 = temps['shakun'].length;
var tempX = CHART_X_OFFSET;
var tempX2 = CHART_X_OFFSET;
var scale_formula; 
var scale_formula2; 
var last_scale_formula;
var last_scale_formula2;
var r4 = 0, b4 = 0, g4 = 0, alpha4 = 0.0;
function drawShakun(){

		alpha4=alpha4+.01;
		ctx.fillStyle = "rgba(" + r4 + "," + g4 + "," + b4 + "," + alpha4 + ")";				
		ctx.clearRect(CHART_X_OFFSET+4+CHART_WIDTH, CHART_Y_OFFSET+1, canv.width-CHART_WIDTH-62, canv.height-(2*CHART_Y_OFFSET)-2);		
		wrapText(ctx, abstracts['shak'], CHART_WIDTH+60, CHART_Y_OFFSET*2-30, canv.width-CHART_WIDTH - 65, 20);

if (counter  == temps['shakun'].length){
	ctx.font = '10pt Calibri';
	ctx.fillStyle = '#333';
	
}

	if (counter < 1){
		clearInterval(shakunTimer);
		btnStp.disabled = false;
	}
	
	scale_formula = canv.height/2 - (((temps['shakun'][counter]*71) / 1) + 50); //temp to pixel conversion
	last_scale_formula = canv.height/2 - (((temps['shakun'][counter+1]*71) / 1) + 50); //temp to pixel conversion
	
	scale_formula2 = canv.height/2 - (((temps['shakun'][counter2]*71) / 1) + 50); //temp to pixel conversion
	last_scale_formula2 = canv.height/2 - (((temps['shakun'][counter2+1]*71) / 1) + 50); //temp to pixel conversion
		
	if (counter2 < temps['shakun'].length){
				
		ctx.beginPath();
		ctx.arc(tempX2, scale_formula2, temps['shakunUnc'][counter2]*60, 0 , 2*Math.PI);
		if (counter2 != temps['shakun'].length){
			tempX2+=2.5;
		}
		ctx.fillStyle = 'lightgreen';	
		ctx.fill();	
		
		if (counter2 < temps['shakunUnc'].length-5){
			if (counter < temps['shakun'].length){
	
				ctx.beginPath();
				ctx.arc(tempX, scale_formula, 2, 0 , 2*Math.PI);
				if (counter != temps['shakun'].length){
					tempX+=2.5;
				}
				ctx.fillStyle = 'green';	
				ctx.fill();				
			}
		counter--;
		}	
	}
	counter2--; 		
}

counterMar1 = temps['marcott'].length;
counterMar2 = temps['marcott'].length;
var marTempX = canv.width/2 - 180;
var marTempX2 = canv.width/2 - 180;
var mar_scale_formula1; 
var mar_scale_formula2; 
var mar_last_scale_formula1;
var mar_last_scale_formula2;
var r3 = 0, b3 = 0, g3 = 0, alpha3 = 0.0;
function drawMarcott(){
		alpha3=alpha3+.01;
		ctx.fillStyle = "rgba(" + r3 + "," + g3 + "," + b3 + "," + alpha3 + ")";				
		ctx.clearRect(CHART_X_OFFSET+4+CHART_WIDTH, CHART_Y_OFFSET+1, canv.width-CHART_WIDTH-62, canv.height-(2*CHART_Y_OFFSET)-2);		
		wrapText(ctx, abstracts['mar'], CHART_WIDTH+60, CHART_Y_OFFSET*2-30, canv.width-CHART_WIDTH - 65, 20);

if (counterMar1  == temps['marcott'].length){
	ctx.font = '10pt Calibri';
	ctx.fillStyle = '#333';	
}
	if (counterMar1 < 1){
		clearInterval(marcottTimer);
		btnHad.disabled = false;
	}
	
	mar_scale_formula1 = canv.height/2 - (((temps['marcott'][counterMar1]*71) / 1) + 40); //temp to pixel conversion
	mar_last_scale_formula1 = canv.height/2 - (((temps['marcott'][counterMar1+1]*71) / 1) + 40); //temp to pixel conversion
	
	mar_scale_formula2 = canv.height/2 - (((temps['marcott'][counterMar2]*71) / 1) + 40); //temp to pixel conversion
	mar_last_scale_formula2 = canv.height/2 - (((temps['marcott'][counterMar2+1]*71) / 1) + 40); //temp to pixel conversion	
	
	if (counterMar2 < temps['marcott'].length){
		ctx.beginPath();
		ctx.arc(marTempX2, mar_scale_formula2, temps['marcottUnc'][counterMar2]*60, 0 , 2*Math.PI);
		if (counterMar2 != temps['marcott'].length){
			marTempX2+=.62;
		}
		ctx.fillStyle = 'lightblue';	
		ctx.fill();			
		///////		
		if (counterMar2 < temps['marcottUnc'].length-15){
			if (counterMar1 < temps['marcott'].length){
	
				ctx.beginPath();
				ctx.arc(marTempX, mar_scale_formula1, 2, 0 , 2*Math.PI);
				if (counter != temps['marcott'].length){
					marTempX+=.62;
				}
				ctx.fillStyle = 'blue';	
				ctx.fill();				
			}
		counterMar1--;
		}		
	}
	counterMar2--;	
}
var counterHad1 = 0;
var hadTempX = canv.width/1.5;
var had_scale_formula1; 
//var had_last_scale_formula1;
var r = 0, b = 0, g = 0, alpha = 0.0;
function drawHadcrut(){
	
	if (counterHad1 > temps['hadcrut'].length){
		clearInterval(hadcrutTimer);
		btnA.disabled = false;		
	}				
		alpha=alpha+.01;
		ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + alpha + ")";				
		ctx.clearRect(CHART_X_OFFSET+4+CHART_WIDTH, CHART_Y_OFFSET+1, canv.width-CHART_WIDTH-62, canv.height-(2*CHART_Y_OFFSET)-2);	
		wrapText(ctx, abstracts['had'], CHART_WIDTH+60, CHART_Y_OFFSET*2-30, canv.width-CHART_WIDTH - 65, 20);		
	
	had_scale_formula1 = canv.height - (((temps['hadcrut'][counterHad1]*71) / 1)+350); //temp to pixel conversion		
			
			if (counterHad1 < temps['hadcrut'].length){	
				ctx.beginPath();
				ctx.fillStyle = 'orange';
				ctx.arc(hadTempX, had_scale_formula1, 2, 0 , 2*Math.PI);
				if (counterHad1 != temps['hadcrut'].length){
					hadTempX+=.04;
					ctx.fill();	
				}		
			}		
		counterHad1++;		
}

countera1b1 = temps['a1b'].length;
var a1bTempX = canv.width/1.485;
var a1b_scale_formula1; 
//var had_last_scale_formula1;

var r2 = 0, b2 = 0, g2 = 0, alpha2 = 0.0;
function drawA1b(){
	if (countera1b1 < 1){
		clearInterval(a1bTimer);	
	}		
		alpha2=alpha2+.03;		
		ctx.fillStyle = "rgba(" + r2 + "," + g2 + "," + b2 + "," + alpha2 + ")";	
		ctx.clearRect(CHART_X_OFFSET+4+CHART_WIDTH, CHART_Y_OFFSET+1, canv.width-CHART_WIDTH-62, canv.height-(2*CHART_Y_OFFSET)-2);
		wrapText(ctx, abstracts['a1bB'], CHART_WIDTH+60, CHART_Y_OFFSET*2-30, canv.width-CHART_WIDTH - 65, 20);			
	a1b_scale_formula1 = (((temps['a1b'][countera1b1]*77))); //temp to pixel conversion		
			if (countera1b1 < temps['a1b'].length){	
				ctx.beginPath();
				ctx.arc(a1bTempX, a1b_scale_formula1, 2, 0 , 2*Math.PI);
				if (countera1b1 != temps['a1b'].length){
					a1bTempX+=.14;
				}
				ctx.fillStyle = 'red';	
				ctx.fill();				
			}
		countera1b1--;			
}	

function drawMarcottTimer(){
	marcottTimer = setInterval(drawMarcott, "10");
}

function drawShakunTimer(){
	shakunTimer = setInterval(drawShakun, "30");
}

function drawHadcrutTimer(){
	hadcrutTimer = setInterval(drawHadcrut, "15");
}

function drawA1bTimer(){
	a1bTimer = setInterval(drawA1b, "60");
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
	var words = text.split(' ');
	var line = '';

	for(var n = 0; n < words.length; n++) {
	  var testLine = line + words[n] + ' ';
	  var metrics = context.measureText(testLine);
	  var testWidth = metrics.width;
	  if (testWidth > maxWidth && n > 0) {
		context.fillText(line, x, y);
		line = words[n] + ' ';
		y += lineHeight;
	  }
	  else {
		line = testLine;
	  }
	}
	context.font = "16px Helvetica";
	context.fillText(line, x, y);
 }

btnAn.addEventListener('click', drawShakunTimer);
btnStp.addEventListener('click', drawMarcottTimer);
btnHad.addEventListener('click', drawHadcrutTimer);
btnA.addEventListener('click', drawA1bTimer);