# `usergroupMembers` Submodule <a name="`usergroupMembers` Submodule" id="@skeptools/provider-slack.usergroupMembers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UsergroupMembers <a name="UsergroupMembers" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers"></a>

Represents a {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members slack_usergroup_members}.

#### Initializers <a name="Initializers" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.slack.usergroup_members.UsergroupMembers;

UsergroupMembers.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .members(java.util.List<java.lang.String>)
    .usergroupId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#members UsergroupMembers#members}. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.usergroupId">usergroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#usergroup_id UsergroupMembers#usergroup_id}. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#id UsergroupMembers#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `members`<sup>Required</sup> <a name="members" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.members"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#members UsergroupMembers#members}.

---

##### `usergroupId`<sup>Required</sup> <a name="usergroupId" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.usergroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#usergroup_id UsergroupMembers#usergroup_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#id UsergroupMembers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.slack.usergroup_members.UsergroupMembers;

UsergroupMembers.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.membersInput">membersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.usergroupIdInput">usergroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.usergroupId">usergroupId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.membersInput"></a>

```java
public java.util.List<java.lang.String> getMembersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `usergroupIdInput`<sup>Optional</sup> <a name="usergroupIdInput" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.usergroupIdInput"></a>

```java
public java.lang.String getUsergroupIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `members`<sup>Required</sup> <a name="members" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `usergroupId`<sup>Required</sup> <a name="usergroupId" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.usergroupId"></a>

```java
public java.lang.String getUsergroupId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### UsergroupMembersConfig <a name="UsergroupMembersConfig" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.slack.usergroup_members.UsergroupMembersConfig;

UsergroupMembersConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .members(java.util.List<java.lang.String>)
    .usergroupId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#members UsergroupMembers#members}. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.usergroupId">usergroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#usergroup_id UsergroupMembers#usergroup_id}. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#id UsergroupMembers#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `members`<sup>Required</sup> <a name="members" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#members UsergroupMembers#members}.

---

##### `usergroupId`<sup>Required</sup> <a name="usergroupId" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.usergroupId"></a>

```java
public java.lang.String getUsergroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#usergroup_id UsergroupMembers#usergroup_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#id UsergroupMembers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



