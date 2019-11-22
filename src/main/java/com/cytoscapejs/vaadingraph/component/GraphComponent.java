package com.cytoscapejs.vaadingraph.component;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.dependency.NpmPackage;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

@Tag("cytoscape-graph")
@NpmPackage(value = "cytoscape", version = "3.12.0")
@JsModule("./src/cytoscape-graph.js") // frontend dir
public class GraphComponent extends PolymerTemplate<GraphModel> {

}
