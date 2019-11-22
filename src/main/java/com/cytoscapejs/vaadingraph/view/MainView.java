package com.cytoscapejs.vaadingraph.view;

import com.cytoscapejs.vaadingraph.component.GraphComponent;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

@Route(value = "")
public class MainView extends VerticalLayout {

    public MainView() {
        GraphComponent graph = new GraphComponent();
        add(graph);
    }
}
