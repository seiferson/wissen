package com.seifernet.wissen.util;

import java.util.ArrayList;

public class HTMLTreeNode {
    private String text;
    private String tag;
    private ArrayList<HTMLTreeNode> children;

    public HTMLTreeNode(){
        text = "";
        tag = "";
        children = new ArrayList<>();
    }

    @Override
    public String toString() {
        if(tag != "text") {
            String tree = "<" + tag + ">" + text;
            for (HTMLTreeNode child : children) {
                tree += child;
            }
            tree += "</" + tag + ">\n";
            return tree;
        } else {
            return text;
        }
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public ArrayList<HTMLTreeNode> getChildren() {
        return children;
    }

    public void setChildren(ArrayList<HTMLTreeNode> children) {
        this.children = children;
    }
}
