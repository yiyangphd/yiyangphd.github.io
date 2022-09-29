---
layout: page
title: Research
use-site-title: true
order: 1
---

My research has focused on variable selection methods for high-dimensional data using knockoff statistics and Bayesian hierarchical models. Variable selection, also known as feature selection, is at the heart of many scientific problems, such as discovering pathogenic variants in human genome.

### 1. Knockoff statistics for variable selection

False discoveries render research findings irreproducible, a long-standing challenge to researchers. They often occur when causal variables are correlated with non-causal ones. Such correlation makes it difficult to distinguish causal variables from non-causal variables that are statistically significant only because they are correlated with the causal ones. I work on the knockoff framework that provides statistical guarantees on the false discovery rate in the presence of complex correlations. In particular, I have developed KnockoffTrio, a statistical method to identify putative causal genetic variants for the father-mother-child trio design. KnockoffTrio controls the false discovery rate, protects against confounding due to population stratification, and is more powerful than conventional methods that control the family-wise error rate.

### 2. Bayesian hierarchical models for variable selection

A typical task in many scientific problems is to discover important variables in predicting an outcome variable. This task is further complicated by the group and hierarchical structures among variables. I work on statistical methods in this context to identify important (groups of) variables. In particular, I have developed a family of Bayesian hierarchical models that can achieve group selection and within-group variable selection simultaneously. The proposed methods can also account for various correlation structures between the variables. 
